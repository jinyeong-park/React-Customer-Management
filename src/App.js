import React, {Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    autoflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'Jinyeong Park',
  'birthday':'961222',
  'gender': 'female',
  'job': 'Web developer'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'Jenny',
  'birthday':'961223',
  'gender': 'female',
  'job': 'SW Engineer'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'Thomas',
  'birthday':'960327',
  'gender': 'male',
  'job': 'CFO'
}
]

class App extends Component {
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
          {
          customers.map(c => {return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name}
              birthday={c.birthday} gender={c.gender} job={c.job}/> ); })
          }

          </TableBody>
        </Table>
        
      {/* </div> */}
      </Paper>
    )
  }
}
      {/* <Customer
      id={customers[0].id}
      image={customers[0].image}
      name={customers[0].name}
      birthday={customers[0].birthday}
      gender={customers[0].gender}
      job={customers[0].job}
      />
      <Customer
      id={customers[1].id}
      image={customers[1].image}
      name={customers[1].name}
      birthday={customers[1].birthday}
      gender={customers[1].gender}
      job={customers[1].job}
      />
      <Customer
      id={customers[2].id}
      image={customers[2].image}
      name={customers[2].name}
      birthday={customers[2].birthday}
      gender={customers[2].gender}
      job={customers[2].job}
      /> */}
      //</div>
  

export default withStyles(styles)(App);