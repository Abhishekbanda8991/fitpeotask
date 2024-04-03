import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
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

    return (
        <div className="wrapper">
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3><i className="fa fa-gear" style={{ 'font-size': '30px' }} /> Dashboard</h3>
                </div>

                <ul className="list-unstyled components">
                    <li className="active">
                        <a className="dash"><i className="fa fa-gear" style={{ 'font-size': '18px' }} /> Dashboard</a>
                    </li>
                    <li>
                        <a data-toggle="collapse" className="dropdown-toggle"><i className="fa fa-product-hunt" style={{ 'font-size': '18px' }} /> Product</a>
                    </li>
                    <li>
                        <a data-toggle="collapse" className="dropdown-toggle"><i className="fa fa-user-circle-o" style={{ 'font-size': '18px' }} /> Customers</a>
                    </li>
                    <li>
                        <a data-toggle="collapse" className="dropdown-toggle"><i className='fa fa-money' style={{ 'font-size': '18px' }} /> Income</a>
                    </li>
                    <li>
                        <a data-toggle="collapse" className="dropdown-toggle"><i className='fa fa-percent' style={{ 'font-size': '18px' }} /> Promote</a>
                    </li>
                    <li>
                        <a data-toggle="collapse" className="dropdown-toggle"><i className='fa fa-question-circle' style={{ 'font-size': '18px' }} /> Help</a>
                    </li>
                </ul>

                <div className='row evano'>
                    <i class="fa fa-user-circle-o" style={{ 'font-size': '35px', position: 'relative', top: '54px' }} />
                    <button className='col-sm-12'>
                        <h6 style={{ position: 'relative', left: '20%' }}>Evano</h6>
                        <p style={{ color: 'grey', position: 'relative', left: '20%' }}>Project manager</p>
                    </button>
                </div>

            </nav>


            <div id="content">

                <div className="row">
                    <div className='col-sm-3'>
                        <h3 style={{ position: 'relative', right: '15%' }}>Hello Abhishek <i className='fa fa-hand-peace-o' style={{ 'font-size': '25px', 'color': 'red' }} />,</h3>
                    </div>
                    <div className='col-sm-3'>
                    </div>
                    <div className='col-sm-3'>
                    </div>
                    <div className='col-sm-3'>
                        <input className="form-control p-1" type="search" placeholder="Search" />
                        <div className='col-sm-3'>
                            <i className='fa fa-search' />
                        </div>
                    </div>
                </div>


                <div className="row gx-5">
                    <div className="col-sm-3">
                        <div className="p-3 border bg-light"><img src={earnings} className='earning-pic' /><p className='earning'>Earning<br /><h2 style={{ 'fontWeight': 'bold', 'color': 'black' }}>$198K</h2><p style={{ 'color': 'green', 'fontWeight': 'bold', 'fontSize': '14px', }}><i class="fa fa-arrow-up" style={{ fontSize: '14px', color: 'green', fontWeight: 'lighter' }} />37.8% <p style={{ 'display': 'inline-block', 'color': 'black' }}>this month</p></p></p></div>
                    </div>
                    <div className="col-sm-3">
                        <div className="p-3 border bg-light"><img src={orders} className='earning-pic' /><p className='earning'>Order<br /><h2 style={{ 'fontWeight': 'bold', 'color': 'black' }}>$2.4K</h2><p style={{ 'color': 'red', 'fontWeight': 'bold', 'fontSize': '14px' }}><i class="fa fa-arrow-down" style={{ fontSize: '14px', color: 'red', fontWeight: 'lighter' }} />2% <p style={{ 'display': 'inline-block', 'color': 'black' }}>this month</p></p></p></div>
                    </div>
                    <div className="col-sm-3">
                        <div className="p-3 border bg-light"><img src={balance} className='earning-pic' /><p className='earning'>Balance<br /><h2 style={{ 'fontWeight': 'bold', 'color': 'black' }}>$2.4K</h2><p style={{ 'color': 'red', 'fontWeight': 'bold', 'fontSize': '14px' }}><i class="fa fa-arrow-down" style={{ fontSize: '14px', color: 'red', fontWeight: 'lighter' }} />2% <p style={{ 'display': 'inline-block', 'color': 'black' }}>this month</p></p></p></div>
                    </div>
                    <div className="col-sm-3">
                        <div className="p-3 border bg-light"><img src={total_sales} className='earning-pic' /><p className='earning'>Total Sales<br /><h2 style={{ 'fontWeight': 'bold', 'color': 'black' }}>$89K</h2><p style={{ 'color': 'green', 'fontWeight': 'bold', 'fontSize': '14px' }}><i class="fa fa-arrow-up" style={{ fontSize: '14px', color: 'green', fontWeight: 'lighter' }} />11% <p style={{ 'display': 'inline-block', 'color': 'black' }}>this week</p></p></p></div>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-sm-8 ">
                        <div className="p-8 border bg-light secondLine"><h5 style={{ fontWeight: 'bold', position: 'relative', top: '6%', right: '41.6%' }}>Overview</h5><p style={{ position: 'relative', top: '6%', right: '40%', color: 'grey' }}>Monthly Earning</p><VerticalbarChart /></div>
                    </div>
                    <div className="col-sm-4 ">
                        <div className="p-4 border bg-light secondLine"><h5 style={{ fontWeight: 'bold', position: 'relative', right: '35%' }}>Customers</h5><p style={{ color: 'grey', position: 'relative', right: '21%' }}>customers that buy products</p><h3 style={{ fontWeight: 'bold', position: 'relative', top: '80px', left: '2%' }}>65%</h3><p style={{ position: 'relative', top: '70px', left: '2%' }}>Total New<br />Customers</p><DoughnutChart /></div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar