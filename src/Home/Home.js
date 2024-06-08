import './Home.css';

function Home()
{
return(
    <main className='d-flex align-items-center justify-content-around flex-column flex-lg-row'>
        <div id='text'className='text-center text-lg-start'>
            <h1 className='fs-3'>SO, YOU WANT TO TRAVEL TO <br/><span>SPACE</span></h1>
            <p>Let&apos;s face it; if you want to go to space, you might as well<br/>
                 genuinely go to outer space and not hover kind of on the<br/>
                  edge of it. Well sit back, and relax because we&apos;ll give you a<br/>
                   truly out of this world experience!</p>
        </div>
        <div id='ex' className=''>
            
                <button className='rounded-circle border-0 fs-1 explore'>
                    Explore
                </button>
           
            
        </div>
    </main>
)
    
}

export default Home;