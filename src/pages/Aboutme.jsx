
import Jelly from "../Assets/Jelly.jpg"

export default function Aboutme(){
    return(
        <div class= 'd-flex flex-wrap '>
            <h2 class=" mx-auto my-auto ">Hi, Im Jemeric.</h2>
            <img src={Jelly} alt="I love Jellyfish" width="300" height="300" class="mx-auto my-3"  />
            <p class="w-100 mx-3 fs-5 justify-content-center" >
                Im HIM, ive been HIM. I will continue to be HIM. 
                I am the one that evrybody knows and seeks. Im like lightning in a bottle the but if caught the entire storm!
                basically, im a pretty big deal.
            </p>
        </div>
   

    )
}