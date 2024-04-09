import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import growth_png from './growth.png'
import check_list from './checklist.png'
import balance_png from './balance.png'
import shopping_bag from './shopping-bag.png'
import DoughnutChart from './DoughnutChart';
import VerticalbarChart from './VerticalbarChart';

function Navbar() {

    let earnings = growth_png;
    let orders = check_list;
    let balance = balance_png;
    let total_sales = shopping_bag;

    let [isOpen, setIsOpen] = useState(true);

    let toggleOpen = () => {
        setIsOpen(true);
    }

    let toggleClose = () => {
        setIsOpen(false)
    }

    return (
        <div className="wrapper">

            <nav id="sidebar" style={{ width: isOpen ? '50px' : '260px'}}>

                <div className="sidebar-header">
                    <h3 style={{ display: isOpen ? 'none' : 'flex', paddingTop: '2px', fontSize: '26px'}}><i className="fa fa-gear" style={{ 'font-size': '30px', 'paddingRight': '5px'}}/>Dashboard</h3>
                    <div className='toggleBar' onClick={toggleOpen} style={{ display: isOpen ? 'none' : 'block', paddingLeft: isOpen ? '4px' : '58px'}}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div className='toggleBar' onClick={toggleClose} style={{ display: isOpen ? 'block' : 'none', paddingLeft: isOpen ? '4px' : '58px'}}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>

                <ul className="list-unstyled components">
                    <li style={{ display: 'flex', 'backgroundColor': '#1e426c76' }}>
                        <i className="fa fa-gear" style={{ 'font-size': '22px', 'paddingTop': '12px', margin: isOpen ? '15px' : '0px' }} />
                        <a className="dash" style={{ display: isOpen ? 'none' : 'block'}}>Dashboard</a>
                    </li>
                    <li style={{ display: 'flex' }}>
                        <i className="fa fa-product-hunt" style={{ 'font-size': '18px', 'paddingTop': '14px', margin: isOpen ? '15px' : '0px' }} />
                        <a className="dropdown-toggle" style={{ display: isOpen ? 'none' : 'block' }}>Product</a>
                    </li>
                    <li style={{ display: 'flex' }}>
                        <i className="fa fa-user-circle-o" style={{ 'font-size': '18px', 'paddingTop': '14px', margin: isOpen ? '15px' : '0px' }} />
                        <a className="dropdown-toggle" style={{ display: isOpen ? 'none' : 'block' }}>Customers</a>
                    </li>
                    <li style={{ display: 'flex' }}>
                        <i className='fa fa-money' style={{ 'font-size': '18px', 'paddingTop': '14px', margin: isOpen ? '15px' : '0px' }} />
                        <a className="dropdown-toggle" style={{ display: isOpen ? 'none' : 'block' }}>Income</a>
                    </li>
                    <li style={{ display: 'flex' }}>
                        <i className='fa fa-percent' style={{ 'font-size': '18px', 'paddingTop': '14px', margin: isOpen ? '15px' : '0px' }} />
                        <a className="dropdown-toggle" style={{ display: isOpen ? 'none' : 'block' }}>Promote</a>
                    </li>
                    <li style={{ display: 'flex' }}>
                        <i className='fa fa-question-circle' style={{ 'font-size': '18px', 'paddingTop': '14px', margin: isOpen ? '15px' : '0px' }} />
                        <a className="dropdown-toggle" style={{ display: isOpen ? 'none' : 'block' }}>Help</a>
                    </li>
                </ul>

                <div className='row evano' style={{ display: isOpen ? 'none' : 'block', width: '100%'}}>
                    <button className='col-md-12'>
                        <i class="fa fa-user-circle-o" style={{ 'font-size': '50px', 'marginTop': '10px', 'marginBottom': '10px'}} />
                        <h6 style={{ position: 'relative', left: '5%', 'margin': '0px', 'marginTop': 'auto', 'marginBottom': 'auto'}}>Evano<p style={{ color: 'grey', 'margin': '0px'}}>Project manager</p></h6>
                    </button>
                </div>

            </nav>


            <div id="content" className='container'>

                <div className="row">
                    <div className='col-sm-3'>
                        <h3 style={{ position: 'relative', right: '10%' }}>Hello Abhishek <i className='fa fa-hand-peace-o' style={{ 'font-size': '25px', 'color': 'red' }} />,</h3>
                    </div>
                    <div className='col-sm-3'>
                    </div>
                    <div className='col-sm-3'>
                    </div>
                    <div className='col-sm-3'>
                        <input className="form-control p-1" type="search" placeholder="Search" />
                        <i className='fa fa-search' />
                    </div>
                </div>

                <div className="row" style={{ 'position': 'relative', 'bottom': '15px' }}>
                    <div className="col-sm-3">
                        <div className="p-3 border bg-light secondLine"><img src={earnings} className='earning-pic' /><p className='earning'>Earning<br /><h2 style={{ 'fontWeight': 'bold', 'color': 'black' }}>$198K</h2><p style={{ 'color': 'green', 'fontWeight': 'bold', 'fontSize': '14px', }}><i class="fa fa-arrow-up" style={{ fontSize: '14px', color: 'green', fontWeight: 'lighter' }} />37.8% <p style={{ 'display': 'inline-block', 'color': 'black' }}>this month</p></p></p></div>
                    </div>
                    <div className="col-sm-3">
                        <div className="p-3 border bg-light secondLine"><img src={orders} className='earning-pic' /><p className='earning'>Order<br /><h2 style={{ 'fontWeight': 'bold', 'color': 'black' }}>$2.4K</h2><p style={{ 'color': 'red', 'fontWeight': 'bold', 'fontSize': '14px' }}><i class="fa fa-arrow-down" style={{ fontSize: '14px', color: 'red', fontWeight: 'lighter' }} />2% <p style={{ 'display': 'inline-block', 'color': 'black' }}>this month</p></p></p></div>
                    </div>
                    <div className="col-sm-3">
                        <div className="p-3 border bg-light secondLine"><img src={balance} className='earning-pic' /><p className='earning'>Balance<br /><h2 style={{ 'fontWeight': 'bold', 'color': 'black' }}>$2.4K</h2><p style={{ 'color': 'red', 'fontWeight': 'bold', 'fontSize': '14px' }}><i class="fa fa-arrow-down" style={{ fontSize: '14px', color: 'red', fontWeight: 'lighter' }} />2% <p style={{ 'display': 'inline-block', 'color': 'black' }}>this month</p></p></p></div>
                    </div>
                    <div className="col-sm-3">
                        <div className="p-3 border bg-light secondLine"><img src={total_sales} className='earning-pic' /><p className='earning'>Total Sales<br /><h2 style={{ 'fontWeight': 'bold', 'color': 'black' }}>$89K</h2><p style={{ 'color': 'green', 'fontWeight': 'bold', 'fontSize': '14px' }}><i class="fa fa-arrow-up" style={{ fontSize: '14px', color: 'green', fontWeight: 'lighter' }} />11% <p style={{ 'display': 'inline-block', 'color': 'black' }}>this week</p></p></p></div>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-8 thirdLine">
                        <div className="col-md border bg-light verticalChart">
                            <h5 style={{fontWeight: 'bold', textAlign: 'left', paddingLeft: '15px', paddingTop: '5px'}}>Overview</h5>
                            <p style={{color: 'grey', textAlign: 'left', paddingLeft: '15px'}}>Monthly Earning</p>
                            <VerticalbarChart/>
                        </div>
                    </div>
                    <div className="col-md-4 thirdLine">
                        <div className="col-md border bg-light doughnutChart">
                            <h5 style={{fontWeight: 'bold', textAlign: 'left', paddingLeft: '15px', paddingTop: '5px'}}>Customers</h5>
                            <p style={{color: 'grey', textAlign:'left', paddingLeft: '15px'}}>customers that buy products</p>
                            <DoughnutChart/>
                            <h4 style={{fontWeight: 'bold', position: 'relative', bottom:'50%'}}>65%</h4>
                            <p style={{position: 'relative', bottom: '50%'}}>Total New<br/>Customers</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar