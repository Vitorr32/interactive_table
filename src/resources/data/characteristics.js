const characteristics = [
    {
        //Characteristic name
        label: 'USABILIDADE',
        //Background color
        color: 'whitesmoke',
        categories: [
            {
                //Title or identifier of the category
                label: 'LERNABILITY',
                //Category header and label color
                color: '#4caf50',
                //Sub categories are objects each containing a label and the content
                sub_categories: [
                    {
                        //Label used in sub category button selection
                        label: 'Consistency',
                        //Content of each sub category, set the content title(like the header of a table)
                        //And it's value as text
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at tincidunt elit. Phasellus quis nisi urna. Donec mattis neque at tincidunt ultrices. Aenean consectetur urna at tincidunt mollis. Donec sagittis vestibulum dui non dapibus. Praesent sem orci, tempus vel dui volutpat, cursus convallis eros. Integer a aliquet neque, vel accumsan risus. Pellentesque nec nisi eu tortor rhoncus sagittis. Nulla lacinia in enim nec pharetra. Donec vulputate cursus facilisis.'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3 At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
                            }
                        ]
                    },
                    {
                        label: 'Simplicity',
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3'
                            }
                        ]
                    },
                    {
                        label: 'Familiariarity',
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3'
                            }
                        ]
                    }
                ]
            },
            {
                //Title or identifier of the category
                label: 'EFFICIENCY',
                //Category header and label color
                color: '#4caf50',
                //Sub categories are objects each containing a label and the content
                sub_categories: [
                    {
                        //Label used in sub category button selection
                        label: 'Time behavior',
                        //Content of each sub category, set the content title(like the header of a table)
                        //And it's value as text
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at tincidunt elit. Phasellus quis nisi urna. Donec mattis neque at tincidunt ultrices. Aenean consectetur urna at tincidunt mollis. Donec sagittis vestibulum dui non dapibus. Praesent sem orci, tempus vel dui volutpat, cursus convallis eros. Integer a aliquet neque, vel accumsan risus. Pellentesque nec nisi eu tortor rhoncus sagittis. Nulla lacinia in enim nec pharetra. Donec vulputate cursus facilisis.'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3 At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
                            }
                        ]
                    },
                    {
                        label: 'Minimal action',
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3'
                            }
                        ]
                    },
                    {
                        label: 'Loading Time',
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3'
                            }
                        ]
                    },
                    {
                        label: 'Accurancy',
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3'
                            }
                        ]
                    },
                    {
                        label: 'Feedback',
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3'
                            }
                        ]
                    }
                    
                ]
            },
            {
                //Title or identifier of the category
                label: 'USER SATISFACTION',
                //Category header and label color
                color: '#4caf50',
                //Sub categories are objects each containing a label and the content
                sub_categories: [
                    {
                        //Label used in sub category button selection
                        label: 'Attractiveness',
                        //Content of each sub category, set the content title(like the header of a table)
                        //And it's value as text
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at tincidunt elit. Phasellus quis nisi urna. Donec mattis neque at tincidunt ultrices. Aenean consectetur urna at tincidunt mollis. Donec sagittis vestibulum dui non dapibus. Praesent sem orci, tempus vel dui volutpat, cursus convallis eros. Integer a aliquet neque, vel accumsan risus. Pellentesque nec nisi eu tortor rhoncus sagittis. Nulla lacinia in enim nec pharetra. Donec vulputate cursus facilisis.'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3 At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
                            }
                        ]
                    },
                    {
                        label: 'Flexibility',
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3'
                            }
                        ]
                    },
                    {
                        label: 'Controlability',
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3'
                            }
                        ]
                    },
                    {
                        label: 'Fault and performance tolerance',
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3'
                            }
                        ]
                    },
                    {
                        label: 'Safety and privacy',
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3'
                            }
                        ]
                    }  
                    
                ]
                
            },
            {
                //Title or identifier of the category
                label: 'ERRORS',
                //Category header and label color
                color: '#4caf50',
                //Sub categories are objects each containing a label and the content
                sub_categories: [
                    {
                        //Label used in sub category button selection
                        label: 'Error Prevention',
                        //Content of each sub category, set the content title(like the header of a table)
                        //And it's value as text
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at tincidunt elit. Phasellus quis nisi urna. Donec mattis neque at tincidunt ultrices. Aenean consectetur urna at tincidunt mollis. Donec sagittis vestibulum dui non dapibus. Praesent sem orci, tempus vel dui volutpat, cursus convallis eros. Integer a aliquet neque, vel accumsan risus. Pellentesque nec nisi eu tortor rhoncus sagittis. Nulla lacinia in enim nec pharetra. Donec vulputate cursus facilisis.'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3 At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
                            }
                        ]
                    },
                    {
                        label: 'Error Recognition',
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3'
                            }
                        ]
                    },
                    {
                        label: 'Error Recovery',
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3'
                            }
                        ]
                    }  
                    
                ]
                
            }
        ]
    },
    
    {
        label: 'ACESSIBILIDADE',
         //Background color
         color: 'whitesmoke',
        categories: [
            {
                //Title or identifier of the category
                label: 'PERCEIVABLE',
                //Category header and label color
                color: '#673ab7',
                //Sub categories are objects each containing a label and the content
                sub_categories: [
                    {
                        //Label used in sub category button selection
                        label: 'Text Alternatives',
                        //Content of each sub category, set the content title(like the header of a table)
                        //And it's value as text
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at tincidunt elit. Phasellus quis nisi urna. Donec mattis neque at tincidunt ultrices. Aenean consectetur urna at tincidunt mollis. Donec sagittis vestibulum dui non dapibus. Praesent sem orci, tempus vel dui volutpat, cursus convallis eros. Integer a aliquet neque, vel accumsan risus. Pellentesque nec nisi eu tortor rhoncus sagittis. Nulla lacinia in enim nec pharetra. Donec vulputate cursus facilisis.'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3 At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
                            }
                        ]
                    },
                    {
                        label: 'Time-based Media',
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3'
                            }
                        ]
                    },
                    {
                        label: 'Adaptable',
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3'
                            }
                        ]
                    },
                    {
                        label: 'Distinguishable',
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3'
                            }
                        ]
                    }
                ]
            },
            {
                //Title or identifier of the category
                label: 'OPERABLE',
                //Category header and label color
                color: '#673ab7',
                //Sub categories are objects each containing a label and the content
                sub_categories: [
                    {
                        //Label used in sub category button selection
                        label: 'Keyboard Accessible',
                        //Content of each sub category, set the content title(like the header of a table)
                        //And it's value as text
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at tincidunt elit. Phasellus quis nisi urna. Donec mattis neque at tincidunt ultrices. Aenean consectetur urna at tincidunt mollis. Donec sagittis vestibulum dui non dapibus. Praesent sem orci, tempus vel dui volutpat, cursus convallis eros. Integer a aliquet neque, vel accumsan risus. Pellentesque nec nisi eu tortor rhoncus sagittis. Nulla lacinia in enim nec pharetra. Donec vulputate cursus facilisis.'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3 At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
                            }
                        ]
                    },
                    {
                        label: 'Enough Time',
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3'
                            }
                        ]
                    },
                    {
                        label: 'Seizures and Physical Reactions',
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3'
                            }
                        ]
                    },
                    {
                        label: 'Navigable',
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3'
                            }
                        ]
                    },
                    {
                        label: 'Input Modalities',
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3'
                            }
                        ]
                    }
                    
                ]
            },
            {
                //Title or identifier of the category
                label: 'UNDERSTANDABLE',
                //Category header and label color
                color: '#673ab7',
                //Sub categories are objects each containing a label and the content
                sub_categories: [
                    {
                        //Label used in sub category button selection
                        label: 'Readable',
                        //Content of each sub category, set the content title(like the header of a table)
                        //And it's value as text
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at tincidunt elit. Phasellus quis nisi urna. Donec mattis neque at tincidunt ultrices. Aenean consectetur urna at tincidunt mollis. Donec sagittis vestibulum dui non dapibus. Praesent sem orci, tempus vel dui volutpat, cursus convallis eros. Integer a aliquet neque, vel accumsan risus. Pellentesque nec nisi eu tortor rhoncus sagittis. Nulla lacinia in enim nec pharetra. Donec vulputate cursus facilisis.'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3 At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
                            }
                        ]
                    },
                    {
                        label: 'Predictable',
                        content: [
                            {
                                title: 'Titulo do conteudo 1',
                                text: 'Conteudo 1'
                            },
                            {
                                title: 'Titulo do conteudo 2',
                                text: 'Conteudo 2'
                            },
                            {
                                title: 'Titulo do conteudo 3',
                                text: 'Conteudo 3'
                            }
                        ]
                    }
                    
                ]
            }
        ]
    }
];

export default characteristics;
