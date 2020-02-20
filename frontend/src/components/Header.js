import React, { Component } from "react";
import "./Header.scss";
import { Link, withRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      id: null,
      profile_pic: null,
      default_pic:
        "https://i5.walmartimages.com/asr/9d3860a6-4ac0-4f75-a412-ac56cbab01a7_1.f695c93416d562f09ddc4e4b9a88a5d8.jpeg"
    };
  }

  componentDidMount = () => {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const id = localStorage.getItem("id");
    const profile_pic = localStorage.getItem("profile_pic");
    this.setState({
      name,
      email,
      id,
      profile_pic
    });
  };

  closeSideMenu = (e, address) => {
    this.hamburgerToggle(e);
    this.props.history.push(address);
  };

  hamburgerToggle = e => {
    e.preventDefault();
    const burgerMenu = document.querySelector(".hamburger");
    burgerMenu.classList.contains("is-active")
      ? burgerMenu.classList.remove("is-active")
      : burgerMenu.classList.add("is-active");
    const headLeft = document.querySelector(".head-left");
    headLeft.classList.contains("show-menu")
      ? headLeft.classList.remove("show-menu")
      : headLeft.classList.add("show-menu");
    headLeft.classList.contains("hide-menu")
      ? headLeft.classList.remove("hide-menu")
      : headLeft.classList.add("hide-menu");
  };

  render() {
    console.log(this.state);
    return (
      <header>
        <section className="header head-top">
          <button
            id="hamburger_menu"
            onClick={e => this.hamburgerToggle(e)}
            className="hamburger hamburger--emphatic"
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <svg
            className="edm-logo"
            width="300"
            height="263"
            viewBox="0 0 300 263"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="300" height="15" fill="white" />
            <rect y="248" width="300" height="15" fill="white" />
            <path
              d="M19.4824 60H13.3301V34.4062H19.4824V60ZM45.1465 60H39.0117L29.9414 44.0742V60H23.7715V34.4062H29.9414L38.9941 50.332V34.4062H45.1465V60ZM68.6133 39.1699H60.9316V60H54.7617V39.1699H47.2207V34.4062H68.6133V39.1699ZM87.1055 49.1543H77.4023V55.2539H88.8633V60H71.2324V34.4062H88.8984V39.1699H77.4023V44.5664H87.1055V49.1543ZM100.887 50.9648H97.5469V60H91.377V34.4062H101.449C104.484 34.4062 106.857 35.0801 108.568 36.4277C110.279 37.7754 111.135 39.6797 111.135 42.1406C111.135 43.9219 110.771 45.3984 110.045 46.5703C109.33 47.7422 108.205 48.6914 106.67 49.418L112.014 59.7363V60H105.404L100.887 50.9648ZM97.5469 46.2012H101.449C102.621 46.2012 103.5 45.8965 104.086 45.2871C104.684 44.666 104.982 43.8047 104.982 42.7031C104.982 41.6016 104.684 40.7402 104.086 40.1191C103.488 39.4863 102.609 39.1699 101.449 39.1699H97.5469V46.2012ZM136.236 60H130.102L121.031 44.0742V60H114.861V34.4062H121.031L130.084 50.332V34.4062H136.236V60ZM154.992 55.2188H146.537L145.061 60H138.469L147.855 34.4062H153.656L163.113 60H156.486L154.992 55.2188ZM148.014 50.4551H153.516L150.756 41.5781L148.014 50.4551ZM182.977 39.1699H175.295V60H169.125V39.1699H161.584V34.4062H182.977V39.1699ZM192.17 60H186.018V34.4062H192.17V60ZM218.133 47.7305C218.133 50.2266 217.67 52.4355 216.744 54.3574C215.818 56.2793 214.5 57.7617 212.789 58.8047C211.09 59.8359 209.15 60.3516 206.971 60.3516C204.791 60.3516 202.857 59.8535 201.17 58.8574C199.482 57.8496 198.164 56.4141 197.215 54.5508C196.277 52.6875 195.785 50.5488 195.738 48.1348V46.6934C195.738 44.1855 196.195 41.9766 197.109 40.0664C198.035 38.1445 199.354 36.6621 201.064 35.6191C202.787 34.5762 204.744 34.0547 206.936 34.0547C209.104 34.0547 211.037 34.5703 212.736 35.6016C214.436 36.6328 215.754 38.1035 216.691 40.0137C217.641 41.9121 218.121 44.0918 218.133 46.5527V47.7305ZM211.857 46.6582C211.857 44.1152 211.43 42.1875 210.574 40.875C209.73 39.5508 208.518 38.8887 206.936 38.8887C203.842 38.8887 202.207 41.209 202.031 45.8496L202.014 47.7305C202.014 50.2383 202.43 52.166 203.262 53.5137C204.094 54.8613 205.33 55.5352 206.971 55.5352C208.529 55.5352 209.73 54.873 210.574 53.5488C211.418 52.2246 211.846 50.3203 211.857 47.8359V46.6582ZM242.689 60H236.555L227.484 44.0742V60H221.314V34.4062H227.484L236.537 50.332V34.4062H242.689V60ZM261.445 55.2188H252.99L251.514 60H244.922L254.309 34.4062H260.109L269.566 60H262.939L261.445 55.2188ZM254.467 50.4551H259.969L257.209 41.5781L254.467 50.4551ZM277.617 55.2539H288.357V60H271.447V34.4062H277.617V55.2539Z"
              fill="white"
            />
            <path
              d="M16.3766 230V204.406H24.6207C26.8824 204.406 28.9156 204.922 30.7203 205.953C32.525 206.973 33.9312 208.42 34.9391 210.295C35.9586 212.158 36.4742 214.25 36.4859 216.57V217.748C36.4859 220.092 35.9879 222.195 34.9918 224.059C34.0074 225.91 32.6129 227.363 30.8082 228.418C29.0152 229.461 27.0113 229.988 24.7965 230H16.3766ZM22.5465 209.17V225.254H24.691C26.4605 225.254 27.8199 224.627 28.7691 223.373C29.7184 222.107 30.193 220.232 30.193 217.748V216.641C30.193 214.168 29.7184 212.305 28.7691 211.051C27.8199 209.797 26.4371 209.17 24.6207 209.17H22.5465ZM66.4004 225.219H57.9453L56.4687 230H49.8769L59.2637 204.406H65.0644L74.5215 230H67.8945L66.4004 225.219ZM59.4219 220.455H64.9238L62.1641 211.578L59.4219 220.455ZM106.985 209.17H99.3031V230H93.1332V209.17H85.5922V204.406H106.985V209.17ZM134.632 225.219H126.177L124.7 230H118.108L127.495 204.406H133.296L142.753 230H136.126L134.632 225.219ZM127.653 220.455H133.155L130.395 211.578L127.653 220.455ZM157.234 230V204.406H166.427C169.72 204.406 172.222 205.01 173.933 206.217C175.655 207.424 176.517 209.176 176.517 211.473C176.517 212.797 176.212 213.928 175.603 214.865C174.993 215.803 174.097 216.494 172.913 216.939C174.249 217.291 175.275 217.947 175.989 218.908C176.704 219.869 177.062 221.041 177.062 222.424C177.062 224.932 176.265 226.818 174.671 228.084C173.089 229.338 170.739 229.977 167.622 230H157.234ZM163.404 219.119V225.254H167.446C168.56 225.254 169.415 225.002 170.013 224.498C170.611 223.982 170.909 223.262 170.909 222.336C170.909 220.203 169.849 219.131 167.728 219.119H163.404ZM163.404 215.076H166.62C167.968 215.064 168.929 214.818 169.503 214.338C170.077 213.857 170.364 213.148 170.364 212.211C170.364 211.133 170.054 210.359 169.433 209.891C168.812 209.41 167.81 209.17 166.427 209.17H163.404V215.076ZM207.609 225.219H199.154L197.677 230H191.086L200.472 204.406H206.273L215.73 230H209.103L207.609 225.219ZM200.63 220.455H206.132L203.373 211.578L200.63 220.455ZM243.412 223.197C243.412 222.295 243.09 221.592 242.445 221.088C241.812 220.584 240.693 220.062 239.088 219.523C237.482 218.984 236.17 218.463 235.15 217.959C231.834 216.33 230.176 214.092 230.176 211.244C230.176 209.826 230.586 208.578 231.406 207.5C232.238 206.41 233.41 205.566 234.922 204.969C236.434 204.359 238.133 204.055 240.02 204.055C241.859 204.055 243.506 204.383 244.959 205.039C246.424 205.695 247.561 206.633 248.369 207.852C249.178 209.059 249.582 210.441 249.582 212H243.43C243.43 210.957 243.107 210.148 242.463 209.574C241.83 209 240.969 208.713 239.879 208.713C238.777 208.713 237.904 208.959 237.26 209.451C236.627 209.932 236.311 210.547 236.311 211.297C236.311 211.953 236.662 212.551 237.365 213.09C238.068 213.617 239.305 214.168 241.074 214.742C242.844 215.305 244.297 215.914 245.434 216.57C248.199 218.164 249.582 220.361 249.582 223.162C249.582 225.4 248.738 227.158 247.051 228.436C245.363 229.713 243.049 230.352 240.107 230.352C238.033 230.352 236.152 229.982 234.465 229.244C232.789 228.494 231.523 227.475 230.668 226.186C229.824 224.885 229.402 223.391 229.402 221.703H235.59C235.59 223.074 235.941 224.088 236.645 224.744C237.359 225.389 238.514 225.711 240.107 225.711C241.127 225.711 241.93 225.494 242.516 225.061C243.113 224.615 243.412 223.994 243.412 223.197ZM281.219 219.154H271.516V225.254H282.977V230H265.346V204.406H283.012V209.17H271.516V214.566H281.219V219.154Z"
              fill="white"
            />
            <path
              d="M70.25 138.617H31.4375V163.016H77.2812V182H6.75781V79.625H77.4219V98.6797H31.4375V120.266H70.25V138.617ZM87.3359 182V79.625H120.312C129.359 79.625 137.492 81.6875 144.711 85.8125C151.93 89.8906 157.555 95.6797 161.586 103.18C165.664 110.633 167.727 119 167.773 128.281V132.992C167.773 142.367 165.781 150.781 161.797 158.234C157.859 165.641 152.281 171.453 145.062 175.672C137.891 179.844 129.875 181.953 121.016 182H87.3359ZM112.016 98.6797V163.016H120.594C127.672 163.016 133.109 160.508 136.906 155.492C140.703 150.43 142.602 142.93 142.602 132.992V128.562C142.602 118.672 140.703 111.219 136.906 106.203C133.109 101.188 127.578 98.6797 120.312 98.6797H112.016ZM212.844 79.625L235.695 150.852L258.477 79.625H290.961V182H266.211V158.094L268.602 109.156L243.852 182H227.539L202.719 109.086L205.109 158.094V182H180.43V79.625H212.844Z"
              fill="white"
            />
          </svg>
          <form className="search_bar">
            <input type="text" placeholder="search" />
            <button>SEARCH</button>
          </form>
          {!this.props.currentUser ? (
            <Link to="/login">
              <button>Login</button>
            </Link>
          ) : (
            <button onClick={e => this.props.handleLogout(e)}>Logout</button>
          )}
          <Link to="/register">
            <button>Register</button>
          </Link>
          <img
            className="user_avatar"
            alt="user"
            src={
              this.state.profile_pic !== "null"
                ? this.state.profile_pic
                : this.state.default_pic
            }
          />
          <img
            className="spinning_gif"
            src="https://media.giphy.com/media/3oGRFAUNzSHAMWZLxe/giphy.gif"
            alt="user_gif"
          />
        </section>
        <section
          id="mobile_friendly_head_left"
          className="header head-left hide-menu"
        >
          <Link to="/main">
            <button
              id="media_special"
              onClick={e => this.closeSideMenu(e, "/main")}
            >
              Home
            </button>
          </Link>
          <Link to="/favourites">
            <button
              id="media_special"
              onClick={e => this.closeSideMenu(e, "/favourites")}
            >
              Liked
            </button>
          </Link>
          <Link to="/upload">
            <button
              id="media_special"
              onClick={e => this.closeSideMenu(e, "/upload")}
            >
              Upload
            </button>
          </Link>
        </section>
      </header>
    );
  }
}

export default withRouter(Header);
