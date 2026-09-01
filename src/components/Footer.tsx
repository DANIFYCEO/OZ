const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 md:px-10 py-12 md:py-16">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt="OZ"
                className="h-8 w-8 object-contain rounded-lg"
              />
              <span className="text-lg font-bold">OZ</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              Reliable software for the real world. Built with care in Lagos,
              Nigeria.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {[
              {
                heading: 'Company',
                links: ['About', 'Careers', 'Blog', 'Press'],
              },
              {
                heading: 'Services',
                links: [
                  'Development',
                  'Cloud',
                  'Mobile',
                  'Security',
                ],
              },
              {
                heading: 'Connect',
                links: ['Twitter', 'LinkedIn', 'GitHub', 'Email'],
              },
            ].map((col) => (
              <div key={col.heading}>
                <p className="text-xs font-mono uppercase tracking-widest text-white/30 mb-3">
                  {col.heading}
                </p>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/5" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} OZ Software Solutions. All rights
            reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy', 'Terms'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
