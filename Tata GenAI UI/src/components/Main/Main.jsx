import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent the default form submit action
            onSent(); // Call the function to handle the input
        }
    };

    return (
        <div className='main'>
            <div className="nav">
                <p style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>Innoventz Tata GenAI</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello, Customer</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest new vehicle features for Tata Motors' upcoming models.</p>
                                <img src={assets.compass_icon} alt="Suggest Features" />
                            </div>
                            <div className="card">
                                <p>Briefly summarize Tata Motors' leadership strategy and its impact on the automotive industry.</p>
                                <img src={assets.bulb_icon} alt="Leadership Strategy" />
                            </div>
                            <div className="card">
                                <p>Brainstorm innovative marketing strategies for Tata Motors' new electric vehicle launch.</p>
                                <img src={assets.message_icon} alt="Marketing Strategies" />
                            </div>
                            <div className="card">
                                <p>Improve the user experience of Tata Motors' vehicle infotainment system.</p>
                                <img src={assets.code_icon} alt="User Experience Improvement" />
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.tata_icon} alt="" />
                            {loading
                                ? <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>
                }
                
                <div className="main-bottom">
                    <div className="search-box">
                        <input 
                            onChange={(e) => setInput(e.target.value)} 
                            value={input} 
                            type="text" 
                            placeholder='Enter a prompt here' 
                            onKeyDown={handleKeyDown} // Add onKeyDown event handler
                        />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>
                    <p className='bottom-info' style={{
                        fontSize: '10px',
                        fontWeight: 'bold',
                        color: '#black',
                        textAlign: 'center',
                        backgroundColor: '#f0f4f9',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                    }}>
                        Welcome to the Tata Motors Service Assistant. Thank you for choosing Tata Motors, where we are committed to delivering exceptional service. This tool is brought to you by Innoventz.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
    