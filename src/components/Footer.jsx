import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-[var(--background-color)] text-[var(--text-color)] py-5 border-t border-[var(--border-color)]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center gap-4 mb-4 md:mb-0">
                            <span className="text-[var(--text-gray)]">Rastyn Khen Ong Acasio</span>
                        </div>
                        <p className="text-[var(--text-gray)] text-center md:text-right flex items-center gap-2">
                            © 2024 Built with React.js & Tailwind CSS
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer