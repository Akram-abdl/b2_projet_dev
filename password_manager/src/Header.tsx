import React from 'react';
import './Header.css';
import passwords_list from './assets/passwords_list.svg';
import account from './assets/account.svg';
import settings from './assets/settings.svg';

class NavItem extends React.Component<{title: string, link: string, icon: string}> {
    render() {
      return (
        <li>
            <a href={this.props.link} className="sidebar_nav_link">
            <img  className="sidebar_nav_icon" src={this.props.icon} alt={this.props.title}></img>
            <span className="sidebar_nav_text">{this.props.title}</span>
            </a>
        </li>
        );
    }
  }

class Header extends React.Component {
    render() {
        return (
            <header>
                <aside className="sidebar">
                    <nav>
                        <ul className="sidebar_nav">
                            <NavItem title={"My passwords"} link={""} icon={passwords_list}/>
                            <NavItem title={"Account"} link={""} icon={account} />
                            <NavItem title={"Settings"} link={""} icon={settings} />
                        </ul>
                    </nav>
                    </aside>
          </header>
        )
    }
}

export default Header;