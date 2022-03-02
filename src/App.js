import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListAthletes from "./pages/athletes/ListAthletes";
import Home from './pages/Home'
import ListOrganizations from "./pages/organizations/ListOrganizations";
import ListSports from "./pages/sports/ListSports";
import ListSponsors from "./pages/sponsors/ListSponsors";
import CreateOrganization from "./pages/organizations/CreateOrganization";
import CreateSponsor from "./pages/sponsors/CreateSponsor";
import CreateSport from "./pages/sports/CreateSport";
import CreateAthlete from "./pages/athletes/CreateAthlete";
import Organization from "./pages/organizations/Organization";
import Header from "./components/Header";
import React from "react";
import {Container} from "react-bootstrap";
import DefaultErrorPage from "./pages/error/DefaultErrorPage";
import Athlete from "./pages/athletes/Athlete";
import Sponsor from "./pages/sponsors/Sponsor";
import Sport from "./pages/sports/Sport";

function App() {
    return (
        <Container>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/error" element={<DefaultErrorPage/>}/>
                    <Route path="/athletes" element={<ListAthletes/>}/>
                    <Route path="/athletes/:id" element={<Athlete/>}/>
                    <Route path="/athletes/create" element={<CreateAthlete/>}/>
                    <Route path="/organizations" element={<ListOrganizations/>}/>
                    <Route path="/organizations/:id" element={<Organization/>}/>
                    <Route path="/organizations/create" element={<CreateOrganization/>}/>
                    <Route path="/sports" element={<ListSports/>}/>
                    <Route path="/sports/:id" element={<Sport/>}/>
                    <Route path="/sports/create" element={<CreateSport/>}/>
                    <Route path="/sponsors" element={<ListSponsors/>}/>
                    <Route path="/sponsors/:id" element={<Sponsor/>}/>
                    <Route path="/sponsors/create" element={<CreateSponsor/>}/>
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

export default App;
