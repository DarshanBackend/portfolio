
const Footer = () => {
    return (
        <footer style={{
            padding: '2rem 0',
            textAlign: 'center',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            color: '#94a3b8',
            fontSize: '0.9rem'
        }}>
            <div className="container">
                <p>© {new Date().getFullYear()} Subodh. All rights reserved.</p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', opacity: 0.7 }}>
                    Built with React & Framer Motion
                </p>
            </div>
        </footer>
    );
};

export default Footer;
