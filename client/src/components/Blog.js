import React from 'react';


function Blog() {
    return (
        <>
        <div class="w-full border-b flex flex-row flex-wrap items-center p-1">
        <div class="w-1/5 p-3">
            <button class="text-2xl font-thin text-gray-600"><i class="fa fa-bars"></i></button>
        </div>
        <div class="w-3/5 p-3">
            <center><img class="w-1/4" src="https://static.politico.com/11/3c/2571c0ab455e91bf81dc4bab93a6/politico-logo.png"/></center>
        </div>
        <div class="w-1/5 flex flex-row flex-wrap">
            <ul class="w-3/4 flex flex-row flex-wrap text-xs font-semibold">
                <li class="mx-3"><a href="">MAGAZINE</a></li>
                <li class="mx-3"><a href="">THE AGENDA</a></li>
                <li class="mx-3"><a href="">PRO</a></li>
            </ul>
            <div class="w-1/4 text-lg text-gray-600"><a href=""><i class="fa fa-search"></i></a></div>
        </div>
    </div>

    <div class="w-full md:w-2/5 mx-auto">
        <div class="mx-5 my-3 text-sm">
        <a href="" class=" text-red-600 font-bold tracking-widest">CORONAVIRUS</a>
        </div>
        <div class="w-full text-gray-800 text-4xl px-5 font-bold leading-none">
            Kemp and Bottoms hurl insults at each other in Georgia mask feud
        </div>
        
        <div class="w-full text-gray-500 px-5 pb-5 pt-2">
           The war of words comes after the governor sued the Atlanta mayor over her city’s mask mandate.
        </div>
        
        <div class="mx-5">
        <img src="https://static.politico.com/dims4/default/fcd6d6a/2147483647/resize/1920x/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F22%2F87%2F2259ffd444678054896b9fa32b4d%2Fgettyimages-1221513169.jpg"/>
        </div>
        
        <div class="w-full text-gray-600 text-normal mx-5">
            <p class="border-b py-3">Georgia Gov. Brian Kemp speaks to the media during a press conference. | Kevin C. Cox/Getty Images</p>
        </div>
        
        <div class="w-full text-gray-600 font-thin italic px-5 pt-3">
            By <strong class="text-gray-700">Quint Forgey</strong><br/>
            07/17/2020 09:57 AM EDT<br/>
            Updated: 07/17/2020 10:33 AM EDT
        </div>
        </div>
        
        <div class="px-5 w-full mx-auto">
            <p class="my-5">Georgia Gov. Brian Kemp and Atlanta Mayor Keisha Lance Bottoms hurled insults at one another Friday, as their legal battle over whether to mandate masks in the state’s capital city entered its second day.</p>
            <p class="my-5">During dueling appearances at a Capitol news briefing and in an interview with CNN, the Republican governor and the Democratic mayor both accused the other’s office of playing politics amid a pandemic that continues to ravage communities across Georgia.</p>
            <p class="my-5">Updating members of the media on the state’s coronavirus response, Kemp defended his decision to sue Atlanta’s mayor and city council in an effort to block local officials there from enforcing an order requiring residents to wear a mask in public.</p>
            <p class="my-5">“Mayor Bottoms’ mask mandate cannot be enforced, but her decision to shutter businesses and undermine economic growth is devastating,” Kemp told reporters in Atlanta, likening his administration’s legal action to “sending in the National Guard.”</p>
            <p class="my-5">“I refuse to sit back and watch as disastrous policies threaten the lives and livelihoods of our citizens,” he said. “We will fight to stop reckless actions and put people over pandemic politics.”</p>
            <p class="my-5">Meanwhile, on CNN, Bottoms dismissed Kemp’s unfolding criticism as “propaganda” and “completely inaccurate,” and called the escalating controversy over face coverings “very bizarre, quite frankly.”</p>
            <p class="my-5">Bottoms also charged that the governor’s lawsuit was politically motivated, remarking that she did not “think it was happenstance” that Kemp pursued litigation one day after President Donald Trump visited Atlanta.</p>
            <p class="my-5">Furthermore, Bottoms alleged the lawsuit represented an act of “personal retaliation.” She noted that other Georgia cities had imposed similar mask orders, and said the governor “sued us personally. He did not sue the city of Atlanta. He filed suit against myself and our city council personally.”</p>
            <p class="my-5">The high-profile clash between two of Georgia’s top leaders came after Kemp issued a statewide order Wednesday banning local mask mandates. But Bottoms said her city’s order requiring face coverings would continue to apply, provoking Kemp to file his lawsuit in state court Thursday.</p>
            <p class="my-5">The feud has served to further elevate the national profile of Bottoms, who revealed this month that she had tested positive for Covid-19 and has attained greater public prominence due to reports that she is being vetted for the role of running mate to presumptive Democratic presidential nominee Joe Biden.</p>
            <p class="my-5">As for Kemp, the rift with Bottoms has dredged up earlier criticisms of his management of Georgia’s coronavirus outbreak.</p>
            <p class="my-5">The governor lifted his stay-at-home order at the end of April after memorably admitting earlier in the month that he had just learned asymptomatic infected people could spread the disease, and state officials were caught misrepresenting Covid-19 reporting data in May.</p>
            <p class="my-5">Kemp’s latest opposition to Bottoms’ order, at a time when even the Trump administration is encouraging deference to local coronavirus directives, has drawn significant criticism. It also diverges from the approaches of Republican governors in Southern states including Alabama, Arkansas and Texas, who have issued statewide mask mandates in recent days.</p>
            <p class="my-5">Kemp’s own lieutenant governor, Republican Geoff Duncan, appeared reluctant to offer a full-throated defense of the governor’s lawsuit Friday, instead repeatedly emphasizing the importance of mask-wearing.</p>
            <p class="my-5">“I hope we move past it,” Duncan told CNN of the ongoing controversy, adding that the “whole conversation around the mandate doesn’t help us get through this. It becomes a distraction [from] the health and well-being of 11 million Georgians.”</p>
            <p class="my-5">Although elected officials averse to mask mandates argue Americans should be able to make their own assessments regarding their safety, public health experts have warned that Covid-19 remains a highly contagious disease — and that those not wearing masks risk infecting other, potentially more vulnerable, people.</p>
        </div>
   
    
    <div class="absolute w-full text-right text-sm bottom-0 p-3 mx-auto text-gray-400">
        Made with <i class="text-red-300 fa fa-heart"></i> By <a href="https://timelydevs.com">Timely Systems</a>
    </div>
    </>
    )};

    export default Blog;