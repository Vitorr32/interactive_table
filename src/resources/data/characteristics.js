import image from '../type-icons/guidelines.png'
import image2 from '../type-icons/rec_design.png'
import image3 from '../type-icons/rec_dev.png'
import image4 from '../type-icons/heuristics.png'
import image5 from '../type-icons/metrics.png'
import image6 from '../type-icons/evalu_heuristics.png'
import image7 from '../type-icons/aspects-through-evaluation.png'
import image8 from '../type-icons/scales.png'

const characteristics = [
    {
        //Characteristic name
        label: 'USABILITY',
        //Background color
        color: 'whitesmoke',
        definition: '"Measure in which a product can be used by specific users to achieve specific objectives with effectiveness, efficiency and satisfaction in a specific context of use"',
        font: 'ISO 9241-11:2018',
        categories: [
            {
                //Title or identifier of the category
                label: 'LERNABILITY',
                //Category header and label color
                color: '#fabd02',
                //Sub categories are objects each containing a label and the content
                sub_categories: [
                    {
                        //Label used in sub category button selection
                        label: 'Consistency',
                        //Content of each sub category, set the content title(like the header of a table)
                        //And it's value as text
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: `1. Characterize the accessibility of custom elements.\n 2. Don’t override the platform gestures. \n 3.Use standard controls when possible. \n 4.Be consistent with user expectations and intuition. \n 5. The layout of items must be consistent with its importance and predictable.`
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: `1. Maintain a consistent information hierarchy regardless of the user’s font size choice. \n 2. Reusable commands and gestures to ensure consistent interactions across applications and functions. \n 3. It is desirable that developers and designers use native UI components and interaction patterns, functions and properties provided by OS because it is easy to provide compatibility with other assistive devices. \n 4. Try to use the built-in icons to perform common tasks. \n 5. Prefer system colors for text. \n 6. Use a consistent style hierarchy to communicate the relative importance of buttons. \n 7. Group similar items under headings that communicate what the groupings are. These groups organize content spatially and it is helpful for those who have low vision or have trouble focusing on the screen. \n 8. Place buttons with a specific functionality in the same place on the screen and design them consistently.`
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: `1. All elements in focus MUST: Be in the default as links, buttons, and form fields that are focused by default. \n 2. Non-standard controls MUST have an instance of importance and status appropriate for them, such as button, link, or checkbox. \n 3. If you develop an application for a specific platform, this must support the characteristic properties of the platform. (ex.zoom out/in by pinching the screen with two fingers or pulling two fingers apart). \n 4. Use integrated objects as they are intended to be used and the user expects them to be used. (ex. operating systems often contain integrated components/widgets that an application can use instead of the developers implementing their own components with equivalent functionality). \n 5. Ensure an element has the same description everywhere it’s used \n 6. Use consistent labelling for buttons, links and headings. Work closely with editorial colleagues to maintain consistency.`
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: `1. Follows the established conventions of the OS patterns. \n 2. Displays commonly used menu items grouped together. \n 3. The “look and feel” should be the same across multiple platforms and devices. \n 4. Provides/do provides screenpages with consistent displays. \n 5. Provide consistent navigation mechanisms. Intelligent grouping, perhaps optimized through adaptation according to usage patterns, can assist usability.`
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: '-'
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: '-'
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: '-'
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    },
                    {
                        label: 'Simplicity',
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: `1. Strive to create a clean design and minimise the number of unnecessary objects. \n 2. Limit content to what the user has requested. \n 3. Economy in the use of gestures`
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: `1. To make things easier for users with small screens, hide parts from the UI in a way that must be intuitive for the user to access them. \n 2. Place menus and link groups in fold-out menus. \n 3. Controls in an app may be set to disappear after a certain amount of time. \n 4. Use at most two different font faces per page. \n 5. Accordion functions: you click on a heading to expand the underlying information. \n 6. Five seconds after starting a video, playback controls may fade from the screen. \n 7. Hide purely decorative images from assistive technologies. \n 8. Avoid unnecessary sounds that play over a screen reader, such as background music that autoplays when entering a web page. If there is background sound, ensure users can safely pause or stop it. Extra sounds added to native elements (as screen readers will be able to interpret native elements correctly). \n 9. Use no more than three buttons in a dialogue.`
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '-'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: `1. Provides/no provides good ergonomics, aesthetic and minimalist design. \n 2. Easy access to screen reader technology. \n 3. Easy to access main functions of the app. \n 4. Use of concise and simple user’s language.`
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: `1. Number of mistake while learning. \n 2. Time taken to learn each task. \n 3. Number of information displayed in a defined context of use.`
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: `1. Gestures should not be overused, nor be too complex given that this special perception differs between the sighted and the visual impaired.`
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: '-'
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    },
                    {
                        label: 'Familiariarity',
                        content: [
                            {
                                title: `1. Use the appearance that the user has a chance of recognising from previous use. \n 2. Rely on recognition of function choices instead of memorization of commands`,
                                img: image,
                                text: 'Conteudo 1'
                            },
                            {
                                title: `1. Locate login button on the top of the screen \n 2. Use standard, easy, identifiable and visible icons \n 3. Real-word metaphors`,
                                img: image2,
                                text: 'Conteudo 2'
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '-'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: `1. Provides/no provides recognizable elements to common interactions (ex. magnifying glass icon for search, up arrow for swipe up, etc.). \n 2. Provides/no provides meaningful visual metaphors in the user interface. \n 3. Support common gestures to control apps.`
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: '-'
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: '-'
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: '-'
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    }
                ]
            },
            {
                //Title or identifier of the category
                label: 'EFFICIENCY',
                //Category header and label color
                color: '#fabd02',
                //Sub categories are objects each containing a label and the content
                sub_categories: [
                    {
                        //Label used in sub category button selection
                        label: 'Time behavior',
                        //Content of each sub category, set the content title(like the header of a table)
                        //And it's value as text
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: `1. Give the user enough time and give warnings before time limits are reached.`
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: `1. Up to 2s to hold a key before the action will repeat must be available`
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '-'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: '1. Provide/not provide menu button.' 
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: `1. Time taken to key-in the data. \n 2. Number of system resources display. \n 3. Time taken to complete given task (Users are given enough time to complete tasks and do not lose information if their time (i.e. a session) runs out).`
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: '1. Allow wait time setting on entering each character.'
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: `1. Very few attempts are made to accomplish task completely for first time. \n 2. The first attempt of use must be as quick as possible. \n 3. The time to read a considerate number of caracters must be as short as possible.`
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    },
                    {
                        label: 'Minimal action',
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: `1. Predicts users needs and fulfill these as quickly as possible. \n 2. Minimize sustained physical effort. \n 3. Minimize repetitive actions.`
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: `1. Present useful content immediately to give a better user experience. \n 2. Offer lists with choices instead of requiring text input and providing an autocomplete function, the interface suggests phrases when the user starts to enter text, word selection. \n 3. Avoid “localised” gestures or provide touchscreen awareness. \n 4. Minimize text input in the interface and should, therefore, be avoided if possible. \n 5. Prefer simplified gestures for interaction. \n 6. Edit copy so that it is simple and clear.`
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '-'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: '-' 
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: `1. The number of interaction occured while installing the application. \n 2. The number of interaction necessary to complete a task.`
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: '1. Handle options faster. The system should allow to perform any action with the less number of steps as possible.'
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: '-'
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    },
                    {
                        label: 'Loading Time',
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: '1. Minimize loading times'
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: '1. Application should be up and running quickly'
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '-'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: '-' 
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: `1. Time taken to load a screen page. \n 2. Time taken to display animations and transitions. 3. Time taken to response of an interaction. 4. Time taken to login/logout.`
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: '-'
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: '-'
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    },
                    {
                        label: 'Accurancy',
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: '1. Facilitate the user’s accuracy and precision.'
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: '-'
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '-'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: '-' 
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: `1. Number of error commited to the user. \n 2. Numbers of tasks successful in first attempt. \n 3. Numbers of tasks successful in given time.`
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: '-'
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: `1. The tasks of the system must me completed with success at the first attempt. \n 2. The learning process by criterion should be as short as possible in relation to task productivity.`
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    },
                    {
                        label: 'Feedback',
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: `1. Use redundant feedback using multimodality. \n 2. Always provide clear status information.`
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: `1. It should also be possible to switch off the feedback. \n 2. Types of feedback: Visual feedback (such as labels, colors, illumination and icons) and touch feedback show users what is available in the UI. \n 3. Design dialog to yield closure (task progression feedback)`
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '-'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: `1. Provide/not provide an indicator of ringing or vibrating mode. \n 2. Provide/not provide auditory reading of the names of items on the screen. \n 3. Provide/not provide auditory indicators of battery status, signal strength and roaming. \n 4. Provide/not provide visual, haptic and auditory feedback of the locking or toggle controls status. \n 5. Provide/not provide menu lists auditory reading. \n 6. Provide/not provide stop sound feedback feature. \n 7. Support the system-defined haptics.`
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: '1. Speed of the vibration feedback.'
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: `1. The audio based feedback must be easy to understand. \n 2. Provide/not provide feedback as requested. \n 3. Provide/not provide accessible confirmation of every completed function. \n 4. Provide/not provide auditory response when an item is selected. \n 5. Provide/not provide vibration feedback to the hand or touching/activation finger. \n 6. Provide feedback to describe the actions that have occurred. \n 7. Give the user clear status information.`
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: '-'
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                        
                    }
                    
                ]
            },
            {
                //Title or identifier of the category
                label: 'USER SATISFACTION',
                //Category header and label color
                color: '##fabd02',
                //Sub categories are objects each containing a label and the content
                sub_categories: [
                    {
                        //Label used in sub category button selection
                        label: 'Attractiveness',
                        //Content of each sub category, set the content title(like the header of a table)
                        //And it's value as text
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: '1. Make the design appealing to all users.'
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: `1. Applications should be visually pleasing and fun as well as usable. \n 2. Avoid use of artiﬁcial voice`
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '-'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: '-' 
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: '-'
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: '-'
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: '1. Considering the experience, the user is comfortable with the application.'
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: `1. Rating scale for overall features. \n 2. Rating scale for interface design. \n 3. Rating scale for output. \n 4. Rating scale for finding help. \n 5. Emotions scale for the product. \n 6. Rating scale for support. \n 7. Rating scale of possibility to reuse the application.`
                            }
                        ]
                    },
                    {
                        label: 'Flexibility',
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: `1. Consider providing a setting for changing the font. \n 2. Sound and haptic feedback can be turned on/off. \n 3. Volume can be adjusted. \n 4. Provide/ no provide basic and advanced configuration of shortcuts (ex. definition and customization of shortcuts to frequent actions). \n 5. Provide documentation in alternative forms, using big fonts, without serigraph, with good format, providing alternatives to information presented in colors. \n 6. Application features must be able to be personalized. \n 7. Provide ways to configure the colors of the interface components. \n 8. Adjustable brightness/contrast/color controls. \n 9. Use scalable text and a spacious layout to accommodate users who may have large text, color correction, magnification, or other assistive settings turned on. \n 10. Accommodate right-or left-handed access and use.\n  11. Allow setting the speech speed.`
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: '-'
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: `1. Font size must be adjustable easily. \n 2. Provide alternative ways to perform gesture-based actions. \n 3. Present canvas amplifier and possibility to limit the maximum zoom, without loss of the characteristics of the canvas configuration (position of icons, etc). \n 4. Delay of button response can be adjustable (to ensure that multiple touches can be treated as one touch).`
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: `1. Consider providing a setting for changing the font. \n 2. Sound and haptic feedback can be turned on/off. \n 3. Volume can be adjusted. \n 4. Provide/ no provide basic and advanced configuration of shortcuts (ex. definition and customization of shortcuts to frequent actions.). \n 5. Provide documentation in alternative forms, using big fonts, without serigraph, with good format, providing alternatives to information presented in colors. \n 6. Application features must be able to be personalized. \n 7. Provide ways to configure the colors of the interface components. \n 8. Adjustable brightness/contrast/color controls. \n 9. Use scalable text and a spacious layout to accommodate users who may have large text, color correction, magnification, or other assistive settings turned on. \n 10. Accommodate right-or left-handed access and use. \n 11. Allow setting the speech speed.`
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: '-'
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: `1. Font size must be adjustable easily. \n 2. Provide alternative ways to perform gesture-based actions. \n 3. Present canvas amplifier and possibility to limit the maximum zoom, without loss of the characteristics of the canvas configuration (position of icons, etc.). \n 4. Delay of button response can be adjustable (to ensure that multiple touches can be treated as one touch).`
                            },
                                {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: '1. Make audio display adjustable easily.'
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    },
                    {
                        label: 'Controlability',
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: `1. Make user actions revertible to allow quick corrections. \n 2. Discourage unconscious action in tasks that require vigilance.`
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: `1. Provide a clear ‘Back’ button on the keypad. Many users do not know how to go back the earlier step in the menu. \n 2. Interruptions can be postponed or suppressed by the user, except interruptions involving an emergency. \n 3. Integrate confirmation dialogues for change and edit actions`
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '1. Limit table width.'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: `1. Must be able to cancel a selection. \n 2. Provides/ no provides clearly pointed "emergency exits” to leave unwanted states (preferably through a physical button or similar). \n 3. Provide a possibility to quickly navigate back to the start page. \n 4. Allow for “exit” confirmation. \n 5. User can quickly exit to Home or previous page. \n 6. Must be able to undo and redo actions. \n 7. The technology must allow autonomous behavior to promote connectivity and relatedness. \n 8. Provide “exit” alternatives.`
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: '-'
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: `1. Touch interface screen readers allow users to run their finger over the screen to hear what is directly underneath. Or the user can quickly move to a UI element from muscle memory. \n 2. Prevent data loss by reminding users of unsaved changes. \n 3. Ask users if they want to proceed with the action they invoked. \n 4. If there is a strong reason why content should autoplay, ensure the user is aware this will happen and can set preferences to prevent it.`
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: `1. For controls that enable other important functions, make sure that the user can turn on the controls again or perform the same function in other ways. \n 2. Allow the immediate interruption of reading by an easy to access button.`
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    },
                    {
                        label: 'Fault and performance tolerance',
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: '1. Design for speed and recovery'
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: '1. Mobile applications should rely network connectivity as little as possible'
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '-'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: '-' 
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: `1. Time taken to install. \n 2. Time taken to connect to network (satellite, wifi, bluetooth etc.). \n 3. Time taken to perform with little internet connection. \n 4. Time taken to recover from a interface error.`
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: `1. Reassure users that their task has not stalled. \n 2. Save the current application state when the application is minimized and restore again when the work is continued. \n 3. Users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.`
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: `1. Successful/unsuccessful installation. \n 2. The application has few frequencies of serious errors while operating.`
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    },
                    {
                        label: 'Safety and privacy',
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: '1. Make provisions for privacy, security, and safety equally available to all users.'
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: `1. Provide alternatives to voice command in situations that require privacy. \n 2. Privacy regulations may require explicit user consent before user identification has been authenticated and before user data is preserved. In cases where the user is a minor, explicit consent may not be solicited in most jurisdictions, countries or regions. Consultation with privacy professionals and legal counsel is advised when considering data preservation as an approach to satisfy this success criterion`
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '-'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: `1. Provides/ no provides security autorizations for other people to access personal informations. \n 2. Ensures liability of the software product vendors in case of fraudulent use of users’ personal information. \n 3. Provides/no provides confidentiality of user personal data. \n 4. Provides/ no provides terms of use while installation. \n 5. Provides/ no provides alternatives to maintain confidential unlock interaction for the blind. \n 6. Asks permition to access users personal information and mobile functionalities while performing tasks that these are require.` 
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: '-'
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: '-'
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: '-'
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    }  
                    
                ]
                
            },
            {
                //Title or identifier of the category
                label: 'ERRORS',
                //Category header and label color
                color: '#fabd02',
                //Sub categories are objects each containing a label and the content
                sub_categories: [
                    {
                        //Label used in sub category button selection
                        label: 'Error Prevention',
                        //Content of each sub category, set the content title(like the header of a table)
                        //And it's value as text
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: `1. Provide fail safe features. \n 2. Arrange elements to minimize hazards and errors.`
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: `1. Provide automatic suggestions within the application (e.g. search autocomplete) \n 2. Warn people before they activate a control that opens a different app. \n 3. Optimize interface to correct imprecise touch control \n 4.Provide clear warning when ‘END’ button is pressed during task completion.`
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '1. Keep the number of keystrokes to a minimum, avoid free text entry where possible, provide pre-selected default values where possible and specify a default text entry mode, language and/or input format, if the device is known to support it.'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: '1. Displays the issue in a precise way. ' 
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: '-'
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: '-'
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: `1. The user interface and audio feedbacks helps the user in minimizing mistakes in operating it. \n 2. Provides/ no provides meaningful instructions to help prevent mistakes in interactive controls (i.e. form elements, widgets, etc.).`
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    },
                    {
                        label: 'Error Recognition',
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: '-'
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: `1. Provide informative error messages to the user both at the top of the page and where the error occurred and a means of navigating away from an error message back to useful information. \n 2. Automatically correct typing errors.`
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '1. Improve algorithms for failure recognition'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: `1. Provides/ no provides clear error states which indicate what the problems are - and how to fix them - whenever errors are returned. \n 2. Provides error notification. \n 3. Provides realistic error management. \n 4. Displays error messages in a language familiar to the user.`
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: '1. Number of error diagnosis.'
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: '1. The system should present the highest number of errors committed by the users, compared to tolerated errors.'
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: '-'
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    },
                    {
                        label: 'Error Recovery',
                        content: [
                            {
                                title: 'Guideline',
                                img: image,
                                text: '1. Helps users recover from errors in as little time as possible.'
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: '1. Should provide suggestions for solutions.'
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '-'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: `1. Suggests constructive solution to the issue. \n 2. Provides/ no provides error correction.`
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: '1. Number of recovered errors.'
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: `1. Helps users recover from errors in as minimum time as possible. \n 2. System clearly provides information about error and explains the solution for solving the error.`
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: '-'
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    }  
                    
                ]
                
            },
            {
                //Title or identifier of the category
                label: 'MEMORABILITY',
                //Category header and label color
                color: '#fabd02',
                //Sub categories are objects each containing a label and the content
                sub_categories: [
                    {
                        //Label used in sub category button selection
                        label: '',
                        //Content of each sub category, set the content title(like the header of a table)
                        //And it's value as text
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: '1. The user recommends that the feedbacks and User Interface is easy to remember.'
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: '1. Pictures are more efficient than words to explain ideas.'
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '-'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: '1. Offers visible objects, actions and options' 
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: '1. Number of information memorized to achieve a specified task.'
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: '-'
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: '1. Learning and relearning process by criterion should be as fast as possible.'
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    }  
                    
                ]
                
            },
            {
                //Title or identifier of the category
                label: 'USER SUPPORT',
                //Category header and label color
                color: '##fabd02',
                //Sub categories are objects each containing a label and the content
                sub_categories: [
                    {
                        //Label used in sub category button selection
                        label: '',
                        //Content of each sub category, set the content title(like the header of a table)
                        //And it's value as text
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: '1. Provide help documentation tailored to blind user’s needs.'
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: `1. Provide documentation in alternative forms, using big fonts, without serigraph, with good format, content resizing, actionable elements, and visible focus, touch target sizes, and consideration around content consistency and adjustability. \n 2. Colours must have contrast clarity, colour and meaning (also providing alternatives to information presented).`
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '-'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: `1. Provides/ no provides easy-to-find documentation and help. \n 2. Provide/not provide context-sensitive help when necessary.`
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: '1. Number of help resources provided. 2. Number of documentation provided.'
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: '1. The assistance must focuse on the user’s current task and indicating concrete steps to follow.'
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: '1. System tasks must be completed successfully and without instructions after a specific period of time without use.'
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    }  
                    
                ]
                
            }
        ]
    },
    
    {
        label: 'ACCESSIBILITY',
         //Background color
         color: 'whitesmoke',
         definition: '"Flexibility provided for access to information and interaction, so that users with different needs can access and use these systems"',
         font: 'Melo, A. M. & Baranauskas C. C.',
        categories: [
            {
                //Title or identifier of the category
                label: 'PERCEIVABLE',
                //Category header and label color
                color: '#fabd02',
                //Sub categories are objects each containing a label and the content
                sub_categories: [
                    {
                        //Label used in sub category button selection
                        label: 'Text Alternatives',
                        //Content of each sub category, set the content title(like the header of a table)
                        //And it's value as text
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: '1. Names of items and images on the screen must be heard as they are touched or selected.'
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: `1. Give visual alternatives to sound, and vice versa. Consider providing transcripts and closed-captions. \n 2. MUST be declared alternative texts for each element within the application that are not texts and elements that are not strictly presentational. Thus, it becomes possible to make the display more flexible, for example: large letters, braille, voice, symbols or simpler language. \n 3. Each form object must have either a caption or a description. Form objects, for example text fields, radio buttons and check boxes, must, where feasible, have a visible caption that is linked to the form field in a correct manner. If a caption cannot provide the full instructions, the form objects title text may be used to give the user information. However, the instructions must also always exist visually on the page as, without a screen reader, in most mobile devices the user cannot display a title text. \n 4. Design content layouts that facilitate grouping text and images as one link. \n 5. Text images MUST be avoided and do not display key information through a background image. \n 6. Sometimes, an on-screen label may be overridden with accessibility text to provide more information to the user. Accessibility text includes both visible text (including labels for UI elements, text on buttons, links, and forms) and nonvisible descriptions that don’t appear on screen (such as alternative text for buttons with icons). \n 7. VoiceOver can read text without additional programming settings in a simple text case. In case of buttons, however, VoiceOver cannot read them unless designers provide a substitutive text.`
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '1. Label graphic elements, icons and buttons with their reason or function. Images and buttons in applications must have a description in a user-friendly language. Exactly how this is done varies between the different operating systems.'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: '1. Purely visual or auditory content that conveys information (i.e. images, icons, videos, notification sounds, etc.) has text-based alternatives for users who can’t see or hear.'
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: '-'
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: `1. Both visible and nonvisible text should be descriptive and meaningful, as some users navigate by using all headings or links on a screen. \n 2. Test your app with a screen reader to identify areas that are missing or need better accessibility text.`
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: '-'
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    },
                    {
                        label: 'Time-based Media',
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: `1. Consider providing your media in alternate formats. \n 2. Include closed captions and audio descriptions.`
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: '1. For prerecorded audio-only content, an alternative for time-based media must be provided that presents equivalent information. For prerecorded video-only content, either an alternative for time-based media or an audio track must be provided that presents equivalent information. (PS:. Except when the audio or video is a media alternative for text and is clearly labeled as such)'
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '-'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: '-'
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: '-'
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: '-'
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: '-'
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    },
                    {
                        label: 'Adaptable',
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: `1. Use multiple cues to present important information. \n 2. Create content that can be presented in different ways (for example simpler layout) without losing information or structure. \n 3. Provide the same means of use for all users: identical whenever possible; equivalent when not. \n 4. Accommodate variations in hand and grip size. \n 5. Screens should have the same functionality regardless of orientation. \n 6. Provide adequate space for the use of products. \n 7. Design for multiple and dynamic contexts/enviroments.`
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: `1. Work from a basic core experience and progressively enhance this for more capable users. \n 2. Increase the size of meaningful glyphs as font size increases. Ensure that your app responds correctly and looks good when users enable bold text. \n 3. A display with high resolution. \n 4. It must be possible to use the interface with both portrait and landscape display formats. \n 5. Respond correctly to Invert Colors. \n 6. Large keys and large lateral pitch between keys reduce erroneous key press. When sufficient space is not available, try to adjust either shape or height of the keys to provide clear tactile sensation.`
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '-'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: '1. Optimized/not optimized the screen size.'
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: '-'
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: `1. As font size increases, avoid truncating text. \n 2. Use Dynamic Type (iOS users) and test that your apps layout adapts to all accessibility font sizes. \n 3. Provide adaptability to the user’s pace.`
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: '-'
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    },
                    {
                        label: 'Distinguishable',
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: `1. Differentiate elements in ways that can be described (i.e., make it easy to give instructions or directions). \n 2.Object with focus: Every object can get a focus. The focus is the most important concept to people with visual impairment. \n 3. Focus should be used in a logical and consistent order. \n 4. Make it easier for users to see and hear content including separating foreground from background. \n 5. Emphasize important information. \n 6. Everything that is not visible on the screen MUST be truly invisible (especially relevant to single-page apps with multiple cards).`
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: `1. Avoid hidden components. \n 2. Ensure the perception of text and figures can be also comprehended without the use of colors. \n 3. Use color and contrast to help users see and interpret your app’s content, interact with the right elements, and understand actions. The contrast ratio between a color and its background ranges from 1-21 based on its luminance (the intensity of light emitted) according to the World Wide Web Consortium (W3C). O constrate de cor DEVE seguir os requirementos level AA do WCAG 2.0/2. While decorative elements (such as logos or illustrations) don’t have to meet contrast ratios, they should be distinguishable if they possess important functionality. \n 4. Provide labels for all form inputs, and ensure form layout and order is clear i.e. related form inputs can follow each other in the content order and if necessary visual design is applied to imply grouping. \n 5. Color can help communicate mood, tone, and critical information. Use color so that all users can understand the content is fundamental to accessible design. Choose primary, secondary, and accent colors for your app that support usability. \n 6. Use text size to help determine contrast. \n 7. Buttons that are uniquely shaped, large, and spaced to support quick identification of location and function. \n 8. Use different button shapes. \n 9. Place content in the central part of the screen. \n 10. Always strive to have good contrasts. Body text and icon texts should, where possible, be presented as black text on white background or the reverse unless the text is large or zoomable. \n 11. Make headers look different from regular text. \n 12. For users who are colorblind, or cannot see differences in color, include design elements in addition to color that ensure they receive the same amount of information. Because colorblindness takes different forms (including red-green, blue-yellow, and monochromatic), use multiple visual cues to communicate important states. Elements such as strokes, indicators, patterns, texture, or text can describe actions and content. \n 13. Clearly Distinguish Selected Items: It is important to clearly feedback to users what item is in focus. This can be done by changing the appearance of an item to make it stand out from everything else. For example, you can change the font and background colour of links and buttons. \n 14. Change blurring and transparency when users turn on Reduce Transparency.`
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: `1. Avoid stating control type or state: Screen readers may automatically announce a control’s type or state through a sound or by speaking the control name before or after the accessibility text. Developer note: If the control type or state isn’t being read correctly, the control’s accessibility role may be improperly set or be a custom control. \n 2. Avoid using timers on controls that perform high-priority functions, as users may not notice these controls if they fade away too quickly. (for example, TalkBack reads controls out loud if they are focused on, and placing them on timers may prevent the controls from completing their task).`
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: '-'
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: '-'
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: `1. Buttons that are highlighted when pressed to support correct selection. \n 2. Avoid hidden components, but if it is necessary, do it in a way to be intuitive for the user to identify it. \n 3. Transitions: focus traversal between screens and tasks should be as continuous as possible. If a task is interrupted and then resumed, place focus on the element that was previously focused. \n 4. Screen-reader users need to know which UI elements are tappable on-screen. To enable screen readers to read the names of components out loud, add the content "Description" attribute to components such as buttons, icons, and tabs containing icons that have no visible text.`
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: '-'
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    }
                ]
            },
            {
                //Title or identifier of the category
                label: 'OPERABLE',
                //Category header and label color
                color: '#fabd02',
                //Sub categories are objects each containing a label and the content
                sub_categories: [
                    {
                        //Label used in sub category button selection
                        label: 'Keyboard Accessible',
                        //Content of each sub category, set the content title(like the header of a table)
                        //And it's value as text
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: `1. Avoid using physical keyboards in which one key represents several characters. \n 2. All controls should be handled with a press action on a touch-based mobile device.`
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: `1. Maintain conﬁrmation to enter each character while locating. \n 2. If you develop an interface that can be used by devices in which you can connect a keyboard, the interface must, where possible, be controllable, navigable and interactive with the keyboard. \n 3. Split the alphabet into several sections or menus. \n 4. Speed or shortcut dialing must be accessible.`
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '1. Insert tactile marks on base keys on virtual keyboards to facilitate the location of other keys.'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: `1. The name of a character that is being entered must be heard. \n 2. A call can be answered by pressing any key.`
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: '-'
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: '-'
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: '-'
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    },
                    {
                        label: 'Enough Time',
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: '1. Provide users enough time to read and use content.'
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: '1. Allow enough time for input, setting on entering each character.'
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '-'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: '-'
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: '1. Time taken to read an especific number of information.'
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: `1. Ensure that users can complete tasks without unexpected changes in content or context that are a result of a time limit. \n 2. For moving, blinking, scrolling, or auto-updating information that starts automatically, lasts more than five seconds, and is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and auto-updating. \n 3. Timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events. \n 4. For any auto-updating information that starts automatically and is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.`
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: '-'
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    },
                    {
                        label: 'Seizures and Physical Reactions',
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: '1. Be cautious when displaying moving or blinking elements.'
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: `1. Enable content that moves, scrolls, or blinks automatically to be paused, stopped, or hidden if it lasts more than five seconds. \n 2. Play tightened animations when Reduce Motion is on. \n 3. A display without glare or reflection from the touch screen. \n 4. Limit flashing content to three times in a one-second period to meet flash and red flash thresholds and avoid flashing large central regions of the screen.`
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '-'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: '1. Elements on the page that move, flash, or animate in other ways can be stopped, and do not distract or harm the users.'
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: '-'
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: '-'
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: '1. Allow user to maintain a neutral body position.'
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    },
                    {
                        label: 'Navigable',
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: `1. Design the service so that frequently accessed information is easily reached with a minimum number of page retrievals. Navigation to less frequently accessed information may take more retrievals as a result. A guideline is that users become frustrated if it takes more than four retrievals to reach their objective. \n 2. Do not use image maps unless you know the device supports them effectively. Image maps allow fast navigation providing the requesting device can support the image involved and providing there is a means of navigating the map satisfactorily. Up, down, left, right and enter are available on most mobile devices, even if there is no pointing device. \n 3. Top-to-bottom screen design.\n  4. Navigation should have clear task flows with minimal steps. Navigation controls should be easy to locate and clearly written. \n 5. Order content by its importance. \n 6. Provide a logical focus flow. People with visual impairment receive information in a focused order. The focus sequence should be designed with consideration of information completeness.`
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: `1. Avoid many options (max. 4-8 items) and scrolling in the navigation menu. \n 2. Hint speech provides extra information for actions that are not clear. For example, Androids “double-tap to select” feature prompts the user to tap twice when landing on an item without taking action. Android TalkBack will also announce any custom actions associated with an element. Use hint speech sparingly and only for complex UI. \n 3. If you develop an application for an operating system or a mobile device that may have control buttons (for example arrow keys and an OK button), it must be possible to use these to navigate in the interface. This currently applies to Android, for example. The physical back button must always work. \n 4. Allow users to navigate your app using sound by adding descriptive labels to UI elements. When using a screen reader and navigating by touch exploration, labels are spoken aloud when users touch UI elements with their fingertips. \n 5. Orient buttons and links in clear rows (horizontally and vertically) This makes it easier for users who cannot see the interface to find them. If a user finds one button, it is easier to find the other buttons as well. This also creates a clearer visual overview for sighted users. \n 6. Give each screen a unique title and provide headings that identify sections in your information hierarchy. \n 7. Do not show much information on the start page. \n 8. Write good labels for your items. \n 9. Captions for input fields must primarily be positioned above the field. Check boxes and radio buttons are exceptions. The text may be to the right of the button/box. Groups of radio buttons and check boxes must, however, have a heading to indicate the function of the group. This must be positioned above the group of radio buttons/check boxes. \n 10. Use short, descriptive headings to structure the information. If it is possible to indicate what are the headings in the code, this must be done. Another basic rule is to keep headings relatively short. However, they must not be so short that they do not make clear to the user what he or she can read about below the heading. \n 11. Limit scrolling to one direction, unless secondary scrolling cannot be avoided.`
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: `1. Provide a discernible “home” that ensure that there is one key that can be easily and quickly identified on any tactile control pad, to allow users to orientate themselves within the interface and also be used as initial command to start the device operation (this initial command is represented for some kind of action on an interface element, which is positioned at a specific place of the screen). \n 2. Insert shortcuts to allow the user to jump between parts of the content on long pages. A shortcut should be hidden at first but appear when it comes into focus during keyboard navigation. \n 3. Do not cause pop-ups or other windows to appear and do not change the current window without informing the user, do not create periodically auto-refreshing pages, unless you have informed the user and provided a means of stopping it and do not use markup to redirect pages automatically. Keep the number of externally linked resources to a minimum. \n 4. Hardware or software directional controllers (such as a D-pad, trackball, or keyboard) allow users to jump from selection to selection in a linear fashion. \n 5. Avoid table structure of input fields.`
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: '1. Provide/not provide voice assistance.'
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: `1. Number of voice assistance in a task. \n 2. Time to find related content.`
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: `1. Make sure the OS screen reader users can navigate to every element. \n 2. Users may also move focus by swiping backwards or forwards on screen to read pages linearly, from top to bottom. This allows users to hone in on certain elements. \n 3. The user interface must implement different gestures to quickly perform actions such as explore or activate screen items. \n 4. Make the search field visible and usable.`
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: '1. A screen and menus that are easy to explore without excessive searching.'
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '1. Degree scale of logically structured navigation.'
                            }
                        ]
                    },
                    {
                        label: 'Input Modalities',
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: `1. Help the user input data by adapting the virtual keyboard to what needs to be entered. \n 2. Improve applications for training gestures using soniﬁcation, verbalization and vibration. \n 3. Avoid joint use of applications’ own gestures and the system screen reader. \n 4. All controls should be accessible to user easily regardless of input method. \n 5. Provide adequate space for the use of assistive devices or personal assistance. \n 6. If the interface permits gesture control, this should be implemented. Gestures must be intuitive and consistent. Use the gestures the users are used to. Do not insert functions that can only be managed via gestures. \n 7. Make gesture recognition ﬂexible, allowing greater variation in form and execution speed. \n 8. Train the gesture recognizer with instances of recently made gestures, adapting it to the user’s characteristics.`
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: `1. Create large clickable areas. Strive for the clickable area to be at least the lineheight of the body text in one direction and the line height of the body text x3 in the other direction. An icon in an app should be at least 9 millimetres wide and high. \n 2. Do not adjust buttons, functions or groups of buttons and functions to the right unless the group of buttons/functions extends over at least 75% of the screen in all positions. Users who cannot see the site use their index finger to scan the interface. The phone reads out what the user points to. This is done most naturally from the top left-hand corner down the page. Buttons that are far out to the right with nothing else on the same line are very difficult to detect. \n 3. Give all controls and interactive elements a hit target that measures at least 44pt x 44pt in iOS. In Material Design, the touch target must measure at least 48 x 48 dp, and the pointer targets should be at least 44 x 44 dp (pointer targets are similar to touch targets, but apply to the use of motion-tracking pointer devices such as a mouse or a stylus). \n 4. Use button size between 7mm and 10mm. It may be appropriate to use larger touch targets to accommodate a larger spectrum of users. \n 5. Allow recognition of multiple voice commands at a time. \n 6. Provide a substitutive button on overlapped action (In VoiceOver, iOS), some gestures are preset as default. Designers should design UI considering these default actions. \n 7. Do not use short impact related gestures (e.g. tap). \n 8. Make it possible to control the interface with just one finger There may be situations in which it is not possible. However, where feasible, it must be  possible to control all functionality with just one finger. It may be necessary for buttons to be hidden and to appear when you touch a certain area on the screen or press another button. \n 9. Do not place frequently used buttons out at the right/left edge unless they  take up at least one third of the width of the screen. Important buttons should primarily be placed centrally and relatively far down on the screen as it is difficult to press buttons out at the edge for users who only use one hand or have to balance their mobile on their knee to use it. \n 10. Let people input information by speaking instead of typing. \n 11. Support your OS Voice Assistant for performing important tasks by voice alone. \n 12. All controls should be handled with press action. Designer should provide control with a press action. \n 13. All controls should be handled with press action. Designer should provide control with a press action. \n 14. Create a standard gesture vocabulary for the visually impaired. \n 15. Allow alternative forms of activation of the voice command, such as physical buttons. \n 16. Voice-activated dialing and text entry. \n 17. On devices with touch screens, associate physical buttons available to the main functions of applications. (In case of none physical buttons, the main function of each application should always be mapped to the same virtual button in a fixed location on the screen).`
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '-'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: `1. System status can be determined with voice activation. \n 2. Touch screen must be startable in any position on the screen. \n 3. Provide/not provide virtual keypad for touch screen device. \n 4. Presence of Screen Reader strategies.`
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: '-'
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: `1. Ease of input. \n 2. Users can efficiently interact with the system using the input method of their choosing (i.e. mobile keyboard, touch, voice, gestures etc.). \n 3. The user interface must implement different gestures to quickly perform actions such as explore or activate screen items. \n 4. Make selections using gliding gestures for direct manipulation.`
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: '-'
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    }
                    
                ]
            },
            {
                //Title or identifier of the category
                label: 'UNDERSTANDABLE',
                //Category header and label color
                color: '#fabd02',
                //Sub categories are objects each containing a label and the content
                sub_categories: [
                    {
                        //Label used in sub category button selection
                        label: 'Readable',
                        //Content of each sub category, set the content title(like the header of a table)
                        //And it's value as text
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: `1. Have the app speak the language of the users. \n 2. Accommodate a wide range of literacy and language skills.\n 3. Use clear and simple language.\n 4. Elements are displayed based on how they should be used in the context of the app.`
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: `1. Pick a good typeface. \n 2. Avoid full text justification. \n 3. Avoid using italics or all caps for long passages of text. \n 4. Natural speech language for voice commands. \n 5. When using background images make sure that content remains readable on the device. \n 6. Avoid abbreviations. Abbreviations of organization names and similar may be used if they are explained the first time they are used. \n 7. Provide clear textual equivalences with semantic to avoid mistakes when texts are read in the screen. \n 8. Make titles, links and navigation items unambiguous, self-explanatory, and descriptive. \n 9. Avoid long texts and use simple sentences. \n 10. Use action verbs to indicate what an element or link does, not what an element looks like, so a visually impaired person can understand. \n 11. Link text should: Specify what will happen if an action or link is tapped and avoid vague descriptions, such as “click here”.`
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '1. For icons that toggle between values or states, announce the icon according to how it is presented to the user. If the icon is a property of an item, make it a checkbox so that screen readers verbalize the current state, such as “on” or “off.”. If the icon is an action, write the text label to specify the action that occurs if the icon is selected.'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: `1. Text and other meaningful information can be easily distinguished and read by users of the system. \n 2. Screen readability: Screen content should be easy to read and navigate through notwithstanding different light conditions. \n 3. Easy to understand visual content (e.g., text dialogs). \n 4. Recognize voice in different languages, accents and intonations. \n 5. Maximize “legibility” of essential information.`
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: '-'
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: '-'
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: '1. The system must display the largest number of words that can be read correctly in a normal viewing distance.'
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }
                        ]
                    },
                    {
                        label: 'Predictable',
                        content: [
                            {
                                title: 'Guidelines',
                                img: image,
                                text: `1. Design clickable objects so that they look clickable. \n 2. Users should be able to easily identify the features and options provided by the interface. \n 3. Make the app’s navigation predictable and reliable.`
                            },
                            {
                                title: 'Design Recommendations',
                                img: image2,
                                text: `1. Do not use colour alone to show that something is linked. One consequence of this is that the links then become difficult to see in direct sunlight. Make buttons three-dimensional and use known designs and locations of icons. \n 2. Associate physical buttons available to the main functions of applications. In case of none physical buttons, the main function of each application should always be mapped to the same virtual button in a fixed location on the screen. \n 3. Items are put on likely spots. \n 4. Create a logical order through links, form controls and objects. 5. Design for “top-down” interaction.`
                            },
                            {
                                title: 'Development Recommendations',
                                img: image3,
                                text: '-'
                            },
                            {
                                title: 'Heuristics',
                                img: image4,
                                text: `1. The purpose of each element is predictable, and how each element relates to the system as a whole is clear and meaningful, to avoid confusion for the users. \n 2. Commonly used buttons (home, volume, power) placed in obvious or intuitive locations. \n 3. Displays the structure of the content on each page in a intuitive way.`
                            },
                            {
                                title: 'Metrics',
                                img: image5,
                                text: '-'
                            },
                            {
                                title: 'Evaluation Heuristics',
                                img: image6,
                                text: '-'
                            },
                            {
                                title: 'Aspects to Observe Through Evaluation ',
                                img: image7,
                                text: '-'
                            },
                            {
                                title: 'Scales',
                                img: image8,
                                text: '-'
                            }

                        ]
                    }
                    
                ]
            }
        ]
    }
];

export default characteristics;
