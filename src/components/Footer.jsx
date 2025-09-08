import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-[var(--background-color)] text-[var(--text-color)] p-5 border-t border-[var(--border-color)]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-center items-center">
                        <p className="text-[var(--text-gray)] text-center md:text-right flex items-center gap-2">
                            © 2025 Rastyn Khen Ong Acasio | Full-Stack Developer
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
