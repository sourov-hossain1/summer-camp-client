
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-content text-white mt-7">
            <div>
                <img className="w-[100px] rounded-[2px]" src="https://t4.ftcdn.net/jpg/01/92/97/85/360_F_192978595_AOzpIW423K5kdlTWuqJXoyLN0z0FXixY.jpg" alt="" />
                <p> Sports Ltd.<br />copyright@ since 1945</p>
            </div>
            <div>
                <span className="footer-title">Types of Sports</span>
                <a className="link link-hover">Cricket</a>
                <a className="link link-hover">Hokey</a>
                <a className="link link-hover">Badminton</a>
                <a className="link link-hover">Fotball</a>
            </div>
            <div>
                <span className="footer-title">Contact Us</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Facebook</a>
                <a className="link link-hover">Tuiter</a>
                <a className="link link-hover">Instagram</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;