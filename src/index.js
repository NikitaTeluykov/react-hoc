import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

const  starWars = [
  {name: 'Dart', side: 'dark'},
  {name: 'Luke', side: 'light'},
  {name: 'Palp', side: 'dark'},
  {name: 'Obivan', side: 'light'}
]

const App = ({list}) => {
  return (
   <ul>
     {
       list.map((char, index) => {
         return (
           <li key={char.name + index}>
             <strong>{char.name}</strong> - &nbsp;
             {char.side}
           </li>
         )
       })
     }
   </ul>
  )
}

const withFilteredProps = Component => ({list, side}) => {
  const filteredList = list.filter(char => char.side === side)

  return <Component list = {filteredList} />
}

const FilteredList = withFilteredProps(App)



ReactDOM.render(
  <React.StrictMode>
    <FilteredList list={starWars} side = "light"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
