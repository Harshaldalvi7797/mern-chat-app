import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { useToast } from "@chakra-ui/toast";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/tooltip";
import { Avatar } from "@chakra-ui/avatar";
import {
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
} from "@chakra-ui/menu";
const SideDrawer = () => {
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const history = useHistory();
    return (
        <React.Fragment>
            <Box
                d="flex"
                justifyContent="space-between"
                alignItems="center"
                bg="white"
                w="100%"
                p="5px 10px 5px 10px"
                borderWidth="5px"
            >
                <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
                    <Button variant="ghost" onClick={onOpen}>
                        <i className="fas fa-search"></i>
                        <Text d={{ base: "none", md: "flex" }} px={4}>
                            Search User
                        </Text>
                    </Button>
                </Tooltip>
                <Text fontSize="2xl" fontFamily="Work sans">
                    Talk-A-Tive
                </Text>
                <div>
                    <Menu>
                        <MenuButton>
                            <BellIcon fontSize="2xl" m={1} />
                        </MenuButton>
                        {/* <MenuList></MenuList> */}
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />}>
                            <Avatar
                                size="sm"
                                cursor="pointer"
                            // name={user.name}
                            // src={user.pic}
                            />
                        </MenuButton>
                        <MenuList>
                            {/* <ProfileModal> */}
                            <MenuItem>My Profile</MenuItem>
                            <MenuItem>Logout</MenuItem>
                            {/* </ProfileModal> */}
                            <MenuDivider />
                            {/* <MenuItem onClick={logoutHandler}>Logout</MenuItem> */}
                        </MenuList>
                    </Menu>
                </div>
            </Box>
        </React.Fragment>
    )
}
export default SideDrawer
