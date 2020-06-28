import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header_2 from '../layout/header2';
import Footer from '../layout/footer';
export default class UTown extends Component {
    constructor(props) {
        super(props);
        // this.onChangeUsername = this.onChangeUsername.bind(this);
        // this.onChangeDescription = this.onChangeDescription.bind(this);
        // this.onChangeDuration = this.onChangeDuration.bind(this);
        // this.onChangeDate = this.onChangeDate.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.onChangeSearchKey = this.onChangeSearchKey.bind(this);

        this.state = {
            searchkey: '',
            canteenDisplay: []
            //listItems,
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/canteens')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                // canteenDisplay: response.data.map(canteen => canteen.name),
                canteenDisplay: response.data,
              })
            }
        })
          .catch((error) => {
            console.log(error);
        })
    
    }

    onChangeSearchKey(e) {
        this.setState({
            searchkey : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        const sendData = {
            searchkey: this.state.searchkey
        }
        console.log(sendData);
        axios.post('http://localhost:5000/canteens/search', sendData)
        .then(response => {
            if (response.data.length > 0) {
                console.log(response.data);
                this.setState({
                    //canteenDisplay : response.data.map(canteen => canteen.name)
                    canteenDisplay: response.data
                })
            }
        })
        .catch(error => {
            console.log(error);
        })

        // this.props.addTodo(this.state.title);
        // this.setState({title: ''});
    }
    
    //this.state.listItems = this.state.canteenDisplay.map((canteen) =><li>{canteen}</li>);

    render() {
        return(
            <div>
                <Header_2/>
                <form onSubmit = {this.onSubmit} style = {{display: 'flex', position: 'fixed'}}> 
                    <input 
                        type = "text" 
                        name = "title" 
                        style ={{width: '80%', padding: '5px'}}
                        placeholder = "Search for your crave"
                        value = {this.state.searchkey}
                        onChange = {this.onChangeSearchKey}
                    />
                    <input 
                    type="submit" 
                    value = "Submit" 
                    className ="btn"
                    style = {{width: '20%'}}
                    />
                </form>  
                
                <div className = "halfUT" id = "UT">
                    <h3>𝚄𝚗𝚒𝚟𝚎𝚛𝚜𝚒𝚝𝚢 𝚃𝚘𝚠𝚗</h3>
                </div>


                <div className =  "banana_background">
                    {/* <img src="/images/Atempo.jpg" alt="Girl in a jacket" width="500" height="600"/> */}
                    <div className = "container">
                            {this.state.canteenDisplay.map((element) => 
                                {
                                    if (element.campus === "UTown") 
                                    return (
    
                                <div>
                                    <img src={element.img_link} alt={element.name} width="273" height="216"/>
                                    <Link onClick = {scrollToTop} style = {linkStyle} to={element.to_id} className = "_Linkbtn"> {element.name}</Link>
                                </div>
                                
                                        )
                                }
                            )}                                  
                    </div>
                                
                    {/* <ul>                       
                        {this.state.canteenDisplay.map(element => <li>{element.name}</li>)}
                    </ul> */}
                </div>
            
                <Footer/>
            </div>
        )
    }
}

const linkStyle = {
    color: '#fff',
    textAlign: 'center',
    float: 'center, center'   
}
const scrollToTop = () => {
    window.scrollTo(0, 0)
}