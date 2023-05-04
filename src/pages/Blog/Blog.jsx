import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [4, 2]
    };
    return (
        <div>
            <div className='w-9/12 mx-auto mb-24 mt-16 '>
                <div className='flex justify-start md:justify-between flex-col md:flex-row'>
                    <h3 className='text-3xl font-bold pb-10'>Q/A</h3>
                    <Pdf targetRef={ref} filename="blog.pdf">
                        {({ toPdf }) => <button onClick={toPdf} className='my-3 px-6 text-orange-950 uppercase font-semibold align-top text-lg bg-lime-400'>Download Pdf</button>}
                    </Pdf>
                </div>

                <div ref={ref}>
                    <ol class="relative border-l border-lime-400  style={{width: 500, height: 500, background: 'blue'}} ref={ref} ">
                        <li class="mb-10 ml-4">
                            <div class="absolute w-3 h-3 bg-lime-400 rounded-full  -left-1.5 border border-white"></div>

                            <h3 class="text-lg font-semibold text-orange-950 dark:text-white">Tell us the differences between uncontrolled and controlled components.</h3>
                            <p class="mb-4 text-base font-normal text-orange-950 dark:text-gray-400">In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>

                        </li>
                        <li class="mb-10 ml-4">
                            <div class="absolute w-3 h-3 bg-lime-400 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                            <h3 class="text-lg font-semibold text-orange-950 dark:text-white">How to validate React props using PropTypes?</h3>
                            <p class="text-base font-normal text-orange-950 dark:text-gray-400">When props are passed to a React component where they are checked against the type definitions configured in the propTypes property. When an invalid value is passed for a prop, a warning is displayed on the JS console.</p>
                        </li>
                        <li class="ml-4 mb-10">
                            <div class="absolute w-3 h-3 bg-lime-400 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                            <h3 class="text-lg font-semibold text-orange-950 dark:text-white">Tell us the difference between nodejs and express js?</h3>
                            <p class="text-base font-normal text-orange-950 dark:text-gray-400">Express is built on top of Node, so yes Express adds more features. Node is just a Javascript environment with libraries to make it easy to write software, where Express extends Node specifically to make webservers easy to write.</p>
                        </li>
                        <li class="ml-4 mb-20">
                            <div class="absolute w-3 h-3 bg-lime-400 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                            <h3 class="text-lg font-semibold text-orange-950 dark:text-white">What is a custom hook, and why will you create a custom hook?</h3>
                            <p class="text-base font-normal text-orange-950 dark:text-gray-400">Custom React JS hooks are reusable functions that a React developer can use to add special and unique functionality to the React applications. </p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Blog;