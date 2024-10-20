import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Chip,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
} from "@mui/material";
import { Box } from "@mui/system";

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "left",
            flexDirection: "column",
            margin: 2,
          }}
          className=""
        >
          <Typography variant="h4" gutterBottom>
            Settings
          </Typography>
          <Typography variant="p" gutterBottom>
            System Configuration
          </Typography>
        </Box>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
            label="Search"
          />
        </FormControl>
      </Box>

      {/* Tabs Section */}
      <Grid container spacing={2}>
        {[
          "Scope Management",
          "Reporting Management",
          "Subsidiary Management",
          "Data Management",
          "Role Management",
        ].map((tab) => (
          <Grid item key={tab}>
            <Button variant="outlined">{tab}</Button>
          </Grid>
        ))}
      </Grid>
      {/* Main Content */}
      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        {/* User Profile Card */}
        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", flexGrow: 1 }}>
          <Card sx={{ flexGrow: 1 }}>
            <CardContent>
              <Avatar sx={{ width: 64, height: 64, marginBottom: 2 }} />
              <Typography variant="h6">User Name</Typography>
              <Typography variant="body2" color="text.secondary">
                Super Admin
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 2 }}>
                Status: <span style={{ color: "green" }}>Active</span>
              </Typography>
              <Button sx={{ mt: 2, width: "100%" }}>Profile Settings </Button>
              <Button sx={{ mt: 1, width: "100%" }}>
                Notification Settings
              </Button>
              <Button sx={{ mt: 1, width: "100%" }}>Logout</Button>
            </CardContent>
          </Card>
        </Grid>

        {/* User Lifecycle Management */}
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: "flex",
            flexGrow: 1,
          }}
        >
          <Card
            sx={{
              flexGrow: 1,
            }}
          >
            <CardContent
              sx={{
                height: "100%",
              }}
            >
              <Typography variant="h6">User Lifecycle Management</Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginTop: 1 }}
              >
                {`User lifecycle management oversees a user's journey from creation to deactivation.`}
              </Typography>
              <Box
                sx={{ marginTop: 2, display: "flex", justifyContent: "end" }}
                className=""
              >
                <Button
                  sx={{ mt: 2, width: "auto" }}
                  variant="contained"
                  color="success"
                >
                  {`Manage Data >`}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Roles and Permissions */}
        <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", flexGrow: 1 }}>
          <Card sx={{ flexGrow: 1 }}>
            <CardContent>
              <Typography variant="h6">Roles and Permissions</Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginTop: 1 }}
              >
                Roles and permissions define user access levels and actions
                within a system.
              </Typography>
              <Box
                sx={{ marginTop: 2, display: "flex", justifyContent: "end" }}
                className=""
              >
                <Button
                  sx={{ mt: 2, width: "auto" }}
                  variant="contained"
                  color="success"
                >
                  {`Manage Data >`}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Report Management */}
        <Grid item xs={12} sm={6} md={6} sx={{ display: "flex", flexGrow: 1 }}>
          <Card sx={{ flexGrow: 1 }}>
            <CardContent>
              <Typography variant="h6">Report Management</Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginTop: 1 }}
              >
                Report management oversees creating, organizing, and analyzing
                reports within a system.
              </Typography>
              <Box
                sx={{
                  marginTop: 2,
                  display: "flex",
                  justifyContent: "start",
                  gap: 1,
                }}
              >
                <Chip label="Chip Filled" />
                <Chip label="Chip Filled" />
                <Chip label="Chip Filled" />
              </Box>
              <Box
                sx={{ marginTop: 2, display: "flex", justifyContent: "end" }}
                className=""
              >
                <Button
                  sx={{ mt: 2, width: "auto" }}
                  variant="contained"
                  color="success"
                >
                  {`Manage Data  >`}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Facility Management */}
        <Grid item xs={12} sm={6} md={6} sx={{ display: "flex", flexGrow: 1 }}>
          <Card sx={{ flexGrow: 1 }}>
            <CardContent>
              <Typography variant="h6">Facility Management</Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginTop: 1 }}
              >
                Facility management oversees the efficient operation,
                maintenance, and optimization of physical spaces and assets
                within an organization.
              </Typography>
              <Box
                sx={{ marginTop: 2, display: "flex", justifyContent: "end" }}
                className=""
              >
                <Button
                  sx={{ mt: 2, width: "auto" }}
                  variant="contained"
                  color="success"
                >
                  {`Manage Data >`}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
