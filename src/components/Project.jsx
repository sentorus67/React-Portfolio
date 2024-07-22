import Turtle from "../Assets/Turtle.jpg";
import Crab from "../Assets/Crab.jpg";
import Whale from "../Assets/Whale.jpg";
import Eel from "../Assets/Eel.jpg";
import Octopus from "../Assets/Octopus.jpg";


export default function Project(){
return(
    <div class='row row-cols-1 row-cols-md-2 g-4'>
        
        <div class='col'>
            <a class='card w-50 my-3 p-3' id="Turtle" href="#">
                <div>coming soon</div>
            </a>
        </div>

        <div class='col'>
        <a class='card w-50 my-3 p-3' id="Whale">
            coming soon
        </a>
        </div>

        <div class='col'>
        <a class='card w-50 my-3 p-3' id="Eel" href="#">
            coming soon
        </a>
        </div>


        <div class='col'>
        <a class='card w-50 my-3 p-3' id="Octopus" href='#'>
            coming soon
        </a>
        </div>


        <div class='col'>
        <a class='card w-50 my-3 p-3'id="Crab" href='#'>
            coming soon
        </a>
        </div>


      
    </div>
)
}