import './App.css';
import {useEffect, useState} from "react";






function App() {


    // The CurrentTime function is a functional component that uses the useState and useEffect hooks from React.
    //
    //     useState is used to store the current time in the time state variable. The setTime function is used to update the time state variable. The initial value of the time state variable is set to the current time using new Date().
    //
    //     useEffect is a hook that allows you to synchronize a component with an external system. In this case, it is used to update the time every second.
    //
    //     The useEffect takes a callback function as its first argument. This function is called when the component is first rendered and subsequently, after every render.
    //
    //     This callback function has the setInterval function, which will call the setTime(new Date()) every 1000 milliseconds (1 second) and update the time state variable with the current time. This will cause the component to re-render and update the displayed time.
    //
    //     The useEffect function also takes an array of dependencies as its second argument, in this case, it is an empty array which means it will run only once when the component is mounted and will not re-run on any re-rendering.
    //
    //     Lastly, the useEffect also returns a cleanup function, this function is called when the component is unmounted. In this case, it is used to clear the intervalId by calling clearInterval(intervalId) which will stop the interval from running after the component is unmounted.
    //
    //     In summary, the CurrentTime component uses the useState hook to store the current time, and the useEffect hook to update the time every second by setting an interval and updating the time state variable. The component re-renders every time the time state variable updates and displays the current time in a div element using toLocaleString().
    //

    const [time,setTime] = useState(new Date());

    useEffect(()=>{
        const  interval = setInterval(()=>{
            setTime(new Date());
        },1000);

        return () => clearInterval(interval);
    },[])




   return(

     <div>

 <h3>
     {time.toTimeString()}
 </h3>

        
         <h4>Ug Idiot</h4>
         <p>pg idiot</p>


         <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum dignissimos earum est exercitationem, id labore modi molestias mollitia odio omnis pariatur perspiciatis quaerat recusandae reprehenderit soluta totam voluptate voluptatem?</h1>


     </div>
   )

}

export default App;
