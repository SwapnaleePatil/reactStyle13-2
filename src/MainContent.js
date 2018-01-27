import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route,BrowserRouter,NavLink,Prompt,Switch} from 'react-router-dom'

const Home = ()=>(

    <h1>Home</h1>
)

const About =()=>(

    <h1>About</h1>
)
const Content =()=>(

    <div className="row">
        <div className="col-sm-8">
            <NavLink className="list-group-item  " activeClassName="active" exact to="/content/city">City</NavLink>
            <NavLink className="list-group-item  " activeClassName="active" exact to="/content/sport">Sports</NavLink>

            <Route path="/content/:contentName" component={ComponentDetails}/>
        </div>
    </div>

)
const ComponentDetails=(props)=>(
    <div>
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
class Form extends React.Component {
    constructor(){
        super();
        this.state={
            isChanged:false
        }
    }
    render(){
        return(
            <div>
                <Prompt when={this.state.isChanged} message="Are Sure You Want To Leave? "/>
                <input type="text" onChange={()=>{
                    this.setState({
                        isChanged:true
                    })
                }}/>
            </div>
        )
    }

}

const NotFound =()=>(

    <h1>NotFound</h1>
)
const Help =()=>(

    <h1>Help</h1>
)

class Hello extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                  <section>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/help" component={Help}/>
                            <Route path="/content" component={Content}/>
                            <Route path="/form" component={Form}/>
                            <Route render={()=> <h1>Not Found</h1>} />
                        </Switch>
                    </section>
                </div>
            </BrowserRouter>)
    }
}

export default Hello;


