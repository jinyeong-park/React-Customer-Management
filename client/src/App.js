import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    autoflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing(2)
  }
});
// React component life cycle: 1) constructor() -> 2) componentWillMount() -> 3) render() -> 4) componentDidMount()
// props or state => shouldComponentUpdate() -> 3) render (draw component again) 


//remove hard coding for customer, instead bring customer data from server using REST api
class App extends Component {
  //initially empty data for customers
  state = {
    customers: "",
    completed: 0
  }
  //access to api & get the data: componentDidMount()
  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }
 
  //access to api & get the data (json format) and put it into body var
  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  //progress bar - > progress function
  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }


  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
       {/* <div> */}
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {this.state.customers ? this.state.customers.map(c => {return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name}
              birthday={c.birthday} gender={c.gender} job={c.job}/> )
             }) : 
             <TableRow>
               <TableCell colSpan="6" align="center">
                 <CircularProgress ClassName={classes.progress} variant="determinate" value={this.state.completed}/>
                 </TableCell>
               </TableRow>}
          </TableBody>
        </Table>
        
      {/* </div> */}
      </Paper>
    );
  }
}
      // {/* <Customer
      // id={customers[0].id}
      // image={customers[0].image}
      // name={customers[0].name}
      // birthday={customers[0].birthday}
      // gender={customers[0].gender}
      // job={customers[0].job}
      // />
      // <Customer
      // id={customers[1].id}
      // image={customers[1].image}
      // name={customers[1].name}
      // birthday={customers[1].birthday}
      // gender={customers[1].gender}
      // job={customers[1].job}
      // />
      // <Customer
      // id={customers[2].id}
      // image={customers[2].image}
      // name={customers[2].name}
      // birthday={customers[2].birthday}
      // gender={customers[2].gender}
      // job={customers[2].job}
      // /> */}
      // //</div>
  

export default withStyles(styles)(App);