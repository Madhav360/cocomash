import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router-dom';
import Header from './common/Header';


 class Productdesciption extends Component{
	constructor(props){
		super(props);
		}
    
  
    render(){
	return(
    <div>
        <Header />
        <div className="container-fluid">
			<div className="row">
				<div className="product-heading text-center">
					<h1>Product Desciption</h1>
				
                <div className="coctab" >
                <table className="col-md-12 cocotable" striped bordered hover variant="dark">
                   <thead>
                   </thead>
                   <tbody>
                      <tr>
                         <td className="col-xs-6 col-md-5 col-lg-5">texttext</td>
                         <td className="col-xs-6 col-md-7 col-lg-7">lorem lorem </td>   
                       </tr>
                       <tr>
                       <td className="col-xs-6 col-md-5 col-lg-5">texttext</td>
                         <td className="col-xs-6 col-md-7 col-lg-7">lorem lorem </td>  
                       </tr>
                       <tr>
                       <td className="col-xs-6 col-md-5 col-lg-5">texttext</td>
                         <td className="col-xs-6 col-md-7 col-lg-7">lorem lorem </td>  
                       </tr>
                    </tbody>
                 </table>
                 <p className="para">Add rounded borders to the top-right corner</p>
                </div>
                </div>
                <div className="product-details">
                    <div className="col-xs-3">
                        <div className="product-date">
                            <h3>FEB 12</h3>
                        </div>
                    </div>
                    <div className="col-xs-9">
                        <div className="text-center farm">
                            <h3>Farm</h3>
                            <table className="" striped bordered hover variant="dark">
                               <thead>
                               </thead>
                             <tbody>
                             <tr>
                                <td className="col-xs-6 col-md-5 col-lg-5">texttext</td>
                                <td className="col-xs-6 col-md-7 col-lg-7">lorem lorem </td>   
                             </tr>
                             <tr>
                                <td className="col-xs-6 col-md-5 col-lg-5">texttext</td>
                                <td className="col-xs-6 col-md-7 col-lg-7">lorem lorem </td>  
                             </tr>
                           </tbody>
                       </table>
                       <div className="subs">
                       <Link to="#" >Certification</Link>
                       </div>
                        </div>
                       
                    </div>
                </div>
                <div className="product-details">
                    <div className="col-xs-3">
                        <div className="product-date">
                            <h3>FEB 12</h3>
                        </div>
                    </div>
                    <div className="col-xs-9">
                        <div className="text-center farm">
                            <h3>Production</h3>
                            <table className="" striped bordered hover variant="dark">
                               <thead>
                               </thead>
                             <tbody>
                             <tr>
                                <td className="col-xs-6 col-md-5 col-lg-5">texttext</td>
                                <td className="col-xs-6 col-md-7 col-lg-7">lorem lorem </td>   
                             </tr>
                             <tr>
                                <td className="col-xs-6 col-md-5 col-lg-5">texttext</td>
                                <td className="col-xs-6 col-md-7 col-lg-7">lorem lorem </td>  
                             </tr>
                           </tbody>
                       </table>
                       <div className="subs">
                       <Link to="#" >Certification</Link>
                       </div>
                        </div>
                       
                    </div>
                </div>

			</div>
            <div className="detail-menu text-center">
            <img className="img-resposive" src="image/product.jpg" /><br />
            <button className="btn primary">Get Notification</button>
            </div>
            {/* <div className="col-md-12 text-center prdbtn">
                <button className="btn">Click Here</button>
            </div> */}
		</div>
	</div>

)
    }
}
export default Productdesciption;