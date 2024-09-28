import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Tabs,
    Tab,
    Card,
    CardContent,
    Button,
    Grid,
    Box,
    TextField,
    Divider
} from '@mui/material';
import {
    AccountCircle,
    ManageAccounts,
    Lock,
    Description,
    Home
} from '@mui/icons-material';

const SettingsPage = () => {
    return (
        <Box sx={{ padding: '20px' }}>
            {/* Header */}
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ backgroundColor: '#f5f5f5', boxShadow: 'none' }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h5">
                        Settings
                        <Typography variant="h6">System Configuration</Typography>
                    </Typography>
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Search"
                        sx={{ width: 200 }}
                    />
                </Toolbar>
            </AppBar>

            {/* Tabs */}
            <Tabs
                value={0}
                indicatorColor="primary"
                textColor="primary"
                aria-label="tabs example"
                sx={{ marginBottom: '20px' }}
            >
                <Tab label="Scope Management" />
                <Tab label="Reporting Management" />
                <Tab label="Subsidiary Management" />
                <Tab label="Data Management" />
                <Tab label="Role Management" />
            </Tabs>

            {/* Content */}
            <Grid container spacing={3}>
                {/* User Profile Card */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                                <AccountCircle sx={{ fontSize: 80 }} />
                                <Typography variant="h6">User Name</Typography>
                                <Typography color="textSecondary">Super Admin</Typography>
                                <Typography color="success.main" variant="body2">
                                    Status: Active
                                </Typography>
                            </Box>
                            <Button fullWidth variant="outlined" sx={{ marginBottom: '10px' }}>
                                Profile Settings
                            </Button>
                            <Button fullWidth variant="outlined" sx={{ marginBottom: '10px' }}>
                                Notification Settings
                            </Button>
                            <Button fullWidth variant="outlined" sx={{ marginBottom: '10px' }}>
                                Logout
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* User Lifecycle Management Card */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                                <ManageAccounts sx={{ fontSize: 40 }} />
                                <Typography variant="h6">User Lifecycle Management</Typography>
                                <Typography color="textSecondary" variant="body2" align="center">
                                    Oversees a user's journey from creation to deactivation.
                                </Typography>
                            </Box>
                            <Button fullWidth variant="contained" sx={{ backgroundColor: "#55a81a" }}>
                                Manage Data
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Roles and Permissions Card */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                                <Lock sx={{ fontSize: 40 }} />
                                <Typography variant="h6">Roles and Permissions</Typography>
                                <Typography color="textSecondary" variant="body2" align="center">
                                    Define user access levels and actions within the system.
                                </Typography>
                            </Box>
                            <Button fullWidth variant="contained" sx={{ backgroundColor: "#55a81a" }}>
                                Manage Data
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Report and Facility Management Cards */}
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <Box display="flex" justifyContent="space-between" padding={2}>
                            {/* Left Card: Report Management */}
                            <CardContent sx={{ flex: 1, marginRight: 1 }}>
                                <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                                    <Description sx={{ fontSize: 40 }} />
                                    <Typography variant="h6">Report Management</Typography>
                                    <Typography color="textSecondary" variant="body2" align="center">
                                        Oversees creating, organizing, and analyzing reports.
                                    </Typography>
                                </Box>
                                <Button fullWidth variant="contained" sx={{ backgroundColor: "#55a81a" }}>
                                    Manage Data
                                </Button>
                            </CardContent>

                            {/* Right Card: Facility Management */}
                            <CardContent sx={{ flex: 1, marginLeft: 1 }}>
                                <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                                    <Home sx={{ fontSize: 40 }} />
                                    <Typography variant="h6">Facility Management</Typography>
                                    <Typography color="textSecondary" variant="body2" align="center">
                                        Oversees the optimization of physical spaces and assets.
                                    </Typography>
                                </Box>
                                <Button fullWidth variant="contained" sx={{ backgroundColor: "#55a81a" }}>
                                    Manage Data
                                </Button>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SettingsPage;
