import React, { useEffect, useState } from "react";
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import "./styles.css";
import { IconButton, Spinner, useToast } from "@chakra-ui/react";
import { getSender, getSenderFull } from "../config/ChatLogics";

import axios from "axios";
import { ArrowBackIcon } from "@chakra-ui/icons";
import ProfileModal from "./miscellaneous/ProfileModal";
// import ScrollableChat from "./ScrollableChat";
// import Lottie from "react-lottie";
// import animationData from "../animations/typing.json"
import { ChatState } from "../Context/ChatProvider";
import UpdateGroupChatModal from './miscellaneous/UpdateGroupChatModal';
const SingleChat = ({ fetchAgain, setFetchAgain }) => {
    const { selectedChat, setSelectedChat, user, notification, setNotification } =
        ChatState();
    return (
        <React.Fragment>
            {selectedChat ? (<React.Fragment>
                <Text
                    fontSize={{ base: "28px", md: "30px" }}
                    pb={3}
                    px={2}
                    w="100%"
                    fontFamily="Work sans"
                    d="flex"
                    justifyContent={{ base: "space-between" }}
                    alignItems="center"
                >
                    <IconButton
                        d={{ base: "flex", md: "none" }}
                        icon={<ArrowBackIcon />}
                        onClick={() => setSelectedChat("")}
                    />   {
                        (!selectedChat.isGroupChat ? (
                            <>
                                {getSender(user, selectedChat.users)}
                                <ProfileModal
                                    user={getSenderFull(user, selectedChat.users)}
                                />
                            </>
                        ) : (
                            <>
                                {selectedChat.chatName.toUpperCase()}
                                <UpdateGroupChatModal
                                    // fetchMessages={fetchMessages}
                                    fetchAgain={fetchAgain}
                                    setFetchAgain={setFetchAgain}
                                />
                            </>
                        ))}
                </Text>
                <Box d="flex" justifyContent="flex-end" p={3} bg="#E8E8E8">Messages here</Box>
            </React.Fragment>) : (

                // to get socket.io on same page
                <Box d="flex" alignItems="center" justifyContent="center" h="100%">
                    <Text fontSize="3xl" pb={3} fontFamily="Work sans">
                        Click on a user to start chatting
                    </Text>
                </Box>
            )}
        </React.Fragment>
    )
}

export default SingleChat
