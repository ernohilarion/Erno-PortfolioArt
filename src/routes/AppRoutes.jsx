import { Routes, Route } from 'react-router-dom'

import HomePage from './../pages/HomePage/HomePage'
import LoginPage from './../pages/LoginPage/LoginPage'
import SignupPage from './../pages/SignupPage/SignupPage'
import AboutUsPage from './../pages/AboutUsPage/AboutUsPage'

import ProfilePage from './../pages/ProfilePage/ProfilePage'
import EditUserPage from './../pages/EditUserPage/EditUserPage'


import AddArtworkPage from './../pages/AddArtworkPage/AddArtworkPage'
import EditArtworkPage from './../pages/EditArtworkPage/EditArtworkPage'
import ArtworkDetailsPage from './../pages/ArtworkDetailsPage/ArtworkDetailsPage'

import AddExhibitionPage from './../pages/AddExhibitionPage/AddExhibitionPage'
import EditExhibitionPage from './../pages/EditExhibitionPage/EditExhibitionPage'
import ExhibitionDetailsPage from './../pages/ExhibitionDetailsPage/ExhibitionDetailsPage'

import ErrorPage from './../pages/ErrorPage/ErrorPage'
import PrivateRoute from './PrivateRoutes'
import CollectionsPage from '../pages/CollectionsPage/CollectionsPage'
import CollectionDetailPage from '../pages/CollectionDetailPage/CollectionDetailPage'



const AppRoutes = () => {
    return (
        <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/collections/:userId" element={<CollectionDetailPage />} />
            <Route path="/artwork-details/:artworkId" element={<ArtworkDetailsPage />} />
            <Route path="/exhibition-details/:exhibitionId" element={<ExhibitionDetailsPage />} />

            {/* Rutas privadas */}
            <Route element={<PrivateRoute />}>
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/profile/edit-profile/:userId" element={<EditUserPage />} />

                <Route path="/add-artwork" element={<AddArtworkPage />} />
                <Route path="/edit-artwork/:artworkId" element={<EditArtworkPage />} />
                <Route path="/artwork-details/:artworkId" element={<ArtworkDetailsPage />} />

                <Route path="/add-exhibition" element={<AddExhibitionPage />} />
                <Route path="/edit-exhibition/:exhibitionId" element={<EditExhibitionPage />} />
                <Route path="/exhibition-details/:exhibitionId" element={<ExhibitionDetailsPage />} />
            </Route>

            {/* Ruta para manejar errores */}
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
};


export default AppRoutes
