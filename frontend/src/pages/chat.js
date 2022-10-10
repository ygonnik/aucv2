import React, {useContext, useState, useEffect}  from 'react';
import {Context} from '../index'
import Timer from '../components/Timer';
import {useParams} from 'react-router-dom'
import { fetchOneLot, changeApproveLot } from '../http/lotAPI';
import {useNavigate} from 'react-router-dom'
import { ADMIN_ROUTE } from '../utils/consts';
import { fetchBidsByLotId, createBid } from '../http/bidAPI';

function ChatPage() {
    return (
      <div class="container mt-3">
        <div class="row clearfix">
            <div class="col-lg-12">
                <div class="card chat-app">
                    <div id="plist" class="people-list">
                        <ul class="list-unstyled chat-list mt-2 mb-0">
                            <li class="clearfix">
                                <div class="about">
                                    <div class="name">Vincent Porter</div>
                                    <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>                                            
                                </div>
                            </li>
                            <li class="clearfix active">
                                <div class="about">
                                    <div class="name">Aiden Chavez</div>
                                    <div class="status"> <i class="fa fa-circle online"></i> online </div>
                                </div>
                            </li>
                            <li class="clearfix">
                                <div class="about">
                                    <div class="name">Mike Thomas</div>
                                    <div class="status"> <i class="fa fa-circle online"></i> online </div>
                                </div>
                            </li>                                    
                            <li class="clearfix">
                                <div class="about">
                                    <div class="name">Christian Kelly</div>
                                    <div class="status"> <i class="fa fa-circle offline"></i> left 10 hours ago </div>
                                </div>
                            </li>
                            <li class="clearfix">
                                <div class="about">
                                    <div class="name">Monica Ward</div>
                                    <div class="status"> <i class="fa fa-circle online"></i> online </div>
                                </div>
                            </li>
                            <li class="clearfix">
                                <div class="about">
                                    <div class="name">Dean Henry</div>
                                    <div class="status"> <i class="fa fa-circle offline"></i> offline since Oct 28 </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="chat">
                        <div class="chat-header clearfix">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="chat-about">
                                        <h6 class="m-b-0">Aiden Chavez</h6>
                                        <small>Last seen: 2 hours ago</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="chat-history">
                            <ul class="m-b-0">
                                <li class="clearfix">
                                    <div class="message-data text-end">
                                        <span class="message-data-time">10:10 AM, Today</span>
                                    </div>
                                    <div class="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                                </li>
                                <li class="clearfix">
                                    <div class="message-data">
                                        <span class="message-data-time">10:12 AM, Today</span>
                                    </div>
                                    <div class="message my-message">Are we meeting today?</div>                                    
                                </li>                               
                                <li class="clearfix">
                                    <div class="message-data">
                                        <span class="message-data-time">10:15 AM, Today</span>
                                    </div>
                                    <div class="message my-message">Project has been already finished and I have results to show you.</div>
                                </li>
                            </ul>
                        </div>
                        <div class="chat-message clearfix">
                            <div class="input-group mb-0">
                              <input type="text" class="form-control" placeholder="Напишите сообщение..." aria-label="Напишите сообщение..." aria-describedby="button-addon2"/>
                              <button class="btn btn-outline-primary" type="button" id="button-addon2">Отправить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
};

export default ChatPage;
