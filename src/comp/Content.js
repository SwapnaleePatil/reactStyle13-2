import React from 'react';
import {Route,BrowserRouter,NavLink,Prompt,Switch} from 'react-router-dom'
import '../App.css';
const Content =()=>(

    <div className="row">
        <div className="col-sm-9">
            <NavLink className="list-group-item  " activeClassName="active" exact to="/content/city">City</NavLink>
            <NavLink className="list-group-item  " activeClassName="active" exact to="/content/sport">Sports</NavLink>

            <Route path="/content/:contentName" component={ComponentDetails}/>
        </div>
    </div>

)
const ComponentDetails=(props)=>(
    <div className="abc">
        { props.match.params.contentName === "city" ?
            <div>
                <img height="100%" width="50%" src="https://static.pexels.com/photos/311012/pexels-photo-311012.jpeg"/>
            </div> :
            <div>
                <img height="50%" width="50%"  src="https://d6vze32yv269z.cloudfront.net/organizations/b0999730-c98f-417c-9dfb-edbfde591991/blocks/9080f135-6087-4d5e-acc5-cacabef54291/hpfulq-1234.jpg"/>
            </div>
        }
    </div>

)
class Contents extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="row">
                    <section>
                          <Content/>
                    </section>
                </div>
            </BrowserRouter>)
    }
}

export default Contents;
