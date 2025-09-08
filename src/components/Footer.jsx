import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-[var(--background-color)] p-5 border-t border-[var(--border-color)]">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center flex-col gap-1 text-center text-xs text-[var(--text-gray)]">
                        <p>© 2025 Rastyn Khen Ong Acasio | Full-Stack Developer. All rights reserved.</p>
                        <p>Built with React.js & Tailwind CSS.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
