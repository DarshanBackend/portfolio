import { useState, useEffect, useRef, useCallback } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const trailCanvasRef = useRef(null);
    const particles = useRef([]);
    const mouse = useRef({ x: -100, y: -100 });
    const ringPos = useRef({ x: -100, y: -100 });
    const animFrameRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    /* ---- Particle class ---- */
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 2;
            this.speedY = (Math.random() - 0.5) * 2;
            this.opacity = 1;
            this.hue = Math.random() * 60 + 190;   // blue-purple range
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.opacity -= 0.025;
            this.size *= 0.97;
        }
        draw(ctx) {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = `hsla(${this.hue}, 85%, 65%, ${this.opacity})`;
            ctx.shadowColor = `hsla(${this.hue}, 85%, 65%, 0.6)`;
            ctx.shadowBlur = 6;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    /* ---- Resize canvas ---- */
    const resizeCanvas = useCallback(() => {
        const canvas = trailCanvasRef.current;
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }, []);

    /* ---- Animation loop ---- */
    const animate = useCallback(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        const canvas = trailCanvasRef.current;
        if (!dot || !ring || !canvas) return;

        const ctx = canvas.getContext('2d');

        /* Smooth ring follow */
        ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.15;
        ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.15;

        dot.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px)`;
        ring.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;

        /* Draw particles */
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.current.forEach((p, i) => {
            p.update();
            p.draw(ctx);
            if (p.opacity <= 0 || p.size <= 0.3) particles.current.splice(i, 1);
        });

        animFrameRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        resizeCanvas();

        let lastSpawn = 0;
        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
            if (!isVisible) setIsVisible(true);

            /* Spawn particles throttled */
            const now = Date.now();
            if (now - lastSpawn > 30) {
                lastSpawn = now;
                for (let i = 0; i < 2; i++) {
                    particles.current.push(new Particle(e.clientX, e.clientY));
                }
                if (particles.current.length > 80) {
                    particles.current.splice(0, particles.current.length - 80);
                }
            }
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        /* Detect hoverable elements */
        const handleMouseOverCapture = (e) => {
            const target = e.target;
            const hoverable = target.closest(
                'a, button, [role="button"], input, textarea, select, .pd-endpoint-item, .project-card, .skill-card, .nav-link'
            );
            setIsHovering(!!hoverable);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseover', handleMouseOverCapture, true);
        window.addEventListener('resize', resizeCanvas);

        animFrameRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseover', handleMouseOverCapture, true);
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animFrameRef.current);
        };
    }, [animate, resizeCanvas, isVisible]);

    /* Hide on touch devices */
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    if (isTouchDevice) return null;

    const cursorClasses = [
        'custom-cursor',
        isVisible ? 'cursor-visible' : '',
        isHovering ? 'cursor-hover' : '',
        isClicking ? 'cursor-click' : '',
    ].filter(Boolean).join(' ');

    return (
        <>
            <canvas ref={trailCanvasRef} className="cursor-trail-canvas" />
            <div className={cursorClasses}>
                <div ref={dotRef} className="cursor-dot" />
                <div ref={ringRef} className="cursor-ring" />
            </div>
        </>
    );
};

export default CustomCursor;
