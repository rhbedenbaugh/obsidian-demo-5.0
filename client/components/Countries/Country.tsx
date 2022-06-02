/**
 * @description I'm not sure this applies or if it's even used.\nIt seems to be for a seperate demo.
 */
 import { React } from '../../../deps.ts';
//creates & returns Country
const Country = (props: any) =>{

  return (<div>
    Nice component
    <div>Id : {props.id}</div>
    <div>Title : {props.title}</div>
    <div>Genre : {props.genre}</div>
    <div>Release Year : {props.releaseYear}</div>
    <div></div>
  </div>)
};

export default Country;