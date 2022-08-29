import React,{useState} from 'react'

const style = {
    footer: `flex flex-wrap justify-center lg:justify-between items-center py-2 bg-slate-800`
}

const Footer = () => {
    const [scrolltop,setScrollTop] = useState(false)

    window.addEventListener('scroll', () => {
        setScrollTop(window.scrollY === 0)
     });
    return (
        <footer className={style.footer}>
            <div className="container mx-auto xl:px-4">
                <div className={style.footer }>
                <p className="mb-2 lg:mb-0">Marvel ©2022 MARVEL</p>
                
                <div className="flex gap-5 items-center text-white">
                    <a href="#" className="font-normal text-sm">Term of Services</a>
                    <a href="#" className="font-normal text-sm">Privacy Policy</a>
                </div>
                
                </div>
            </div>
        </footer>
    )
}

export default Footer