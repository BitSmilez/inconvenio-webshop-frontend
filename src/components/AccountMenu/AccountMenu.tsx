import React, {useContext, useState} from "react";
import {Box, IconButton, ListItemIcon, Menu, MenuItem, Tooltip} from "@mui/material";
import {
    AccountCircleOutlined,
    Logout,
    Settings,
    AddCircleOutline, Login
} from "@mui/icons-material";
import {CustomerContext} from "../../context/CustomerContext";


const AccountMenu = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const {setLoggedIn, customer}: any = useContext(CustomerContext);

    return (
        <div>
            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                <Tooltip title="Your Account">
                    <IconButton
                        onClick={handleClick}
                        sx={{ml: 1}}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <AccountCircleOutlined fontSize={"large"}/>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                {customer.isLoggedIn === "true" && (
                    <div>

                        <MenuItem onClick={() => {
                            window.location.href = "/account"
                        }}>
                            <ListItemIcon>
                                <Settings fontSize="small"/>
                            </ListItemIcon>
                            Account
                        </MenuItem>
                        <MenuItem onClick={() => {
                            setLoggedIn(false)
                            sessionStorage.removeItem("accessToken")
                            sessionStorage.removeItem("customerID")
                            window.location.reload();
                        }}>
                            <ListItemIcon>
                                <Logout fontSize="small"/>
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </div>
                )}
                {customer.isLoggedIn !== "true" && (
                    <div>
                        <MenuItem onClick={() => window.location.href = "/login"}>
                            <ListItemIcon>
                                <Login fontSize="small"/>
                            </ListItemIcon>
                            Login
                        </MenuItem>
                        <MenuItem onClick={() => window.location.href = "/register"}>
                            <ListItemIcon onClick={() => window.location.href = "/register"}>
                                <AddCircleOutline fontSize="small"/>
                            </ListItemIcon>
                            Create Account
                        </MenuItem>
                    </div>
                )}
            </Menu>
        </div>
    );
}

export default AccountMenu;