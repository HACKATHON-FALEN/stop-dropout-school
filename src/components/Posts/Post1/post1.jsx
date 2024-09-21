import React, { useState } from "react";
import Carousel from 'react-material-ui-carousel';
import { Paper, Card, CardContent, Typography, Grid } from '@mui/material';
import photo_1 from '../assets/img/photo1.jpg';
import photo_2 from '../assets/img/photo2.jpg';
import photo_3 from '../assets/img/photo3.jpg';
import photo_4 from '../assets/img/photo4.jpg';

import photo_related1 from '../assets/img/post_related1.jpg';
import photo_related2 from '../assets/img/post_related2.jpg';
import photo_related3 from '../assets/img/post_related3.jpg';
import photo_related4 from '../assets/img/post_related4.jpg';

import goldTrophy from '../assets/img/gold_trophy.png';  // Trophy images
import silverTrophy from '../assets/img/silver_trophy.png';
import copperTrophy from '../assets/img/copper_trophy.png';

// Import the CommentSection component
import CommentSection from '../../Comment/CommentSection'; // Make sure the path is correct

const Post1 = () => {
    const photos = [photo_1, photo_2, photo_3, photo_4];

    const [donationAmount, setDonationAmount] = useState(300); // Default donation amount
    const totalGoal = 10000; // Example goal amount in LEI
    const totalRaised = 3950; // Example raised amount in LEI

    const donations = [
        { name: 'Ana Popescu', amount: 1000, message: 'Vreau să susțin educația copiilor.', rank: 1, trophy: goldTrophy },
        { name: 'Marian Ionescu', amount: 800, message: 'Faceți o treabă minunată!', rank: 2, trophy: silverTrophy },
        { name: 'Anonymous', amount: 600, message: 'Cu multă dragoste.', rank: 3, trophy: copperTrophy },
        { name: 'Ion Vasilescu', amount: 500, message: 'Succes în toate proiectele voastre!', rank: 4 },
        { name: 'Cristina Matei', amount: 300, message: 'Pentru un viitor mai bun.', rank: 5 },
        { name: 'Anonim', amount: 250, message: 'Vă susțin din umbră.', rank: 6 },
        { name: 'Anonim', amount: 200, message: 'Spor în educație.', rank: 7 },
        { name: 'Anonim', amount: 150, message: 'Succes!', rank: 8 },
        { name: 'Anonim', amount: 100, message: 'Ofer cu drag.', rank: 9 },
        { name: 'Anonim', amount: 50, message: 'Pentru copii.', rank: 10 }
    ];

    // Add style and animation for the top three donors
    const getRankStyle = (rank) => {
        switch (rank) {
            case 1: return { color: 'gold', fontWeight: 'bold', animation: 'glitter-gold 1.5s infinite alternate' };
            case 2: return { color: 'silver', fontWeight: 'bold', animation: 'glitter-silver 1.5s infinite alternate' };
            case 3: return { color: '#cd7f32', fontWeight: 'bold', animation: 'glitter-copper 1.5s infinite alternate' };
            default: return {};
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value.replace(/[^\d]/g, ''); // Allow only numbers
        setDonationAmount(value);
    };

    return (
        <>
            <main className="profile-page" style={{ marginTop: "80px" }}>
                <section className="relative py-16 bg-gray-300">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
                            <div className="text-center mt-12">
                                <h1 style={{ fontSize: '50px', fontWeight: 'bold' }}>Micii antreprenori</h1>
                            </div>

                            <div className="text-center mt-6 p-5">
                                <div className="text-sm text-gray-500 mb-1 font-bold">
                                    {totalRaised.toLocaleString()} LEI strânși din {totalGoal.toLocaleString()} LEI
                                </div>
                                <div className="w-full bg-gray-100 h-2.5">
                                    <div
                                        className="bg-orange-500 h-2.5 rounded-lg"
                                        style={{ width: `${(totalRaised / totalGoal) * 100}%` }}
                                    ></div>
                                </div>
                            </div>

                            <CardContent className="mt-10 py-10 px-10 border-t border-gray-300 text-center">
                                <Typography variant="h4" gutterBottom></Typography>
                                <Typography style={{ fontSize: "20px" }} variant="body1" component="p" paragraph>
                                    A venit timpul să vă prezint și micii eroi pentru care sunt <span><strong>„Doamna”</strong></span>. Clasa noastră este compusă din 6 elevi de clasa a IV-a și 4 elevi de clasa a III-a, iar deviza noastră este <span><strong>„A doua familie este la școală!”</strong></span>
                                </Typography>
                                <Typography style={{ fontSize: "20px" }} variant="body1" component="p" paragraph>
                                    Debutul meu în educație a fost sprijinit de Teach For Romania, o organizație construită de oameni pentru oameni, dar asta nu înseamnă că vulnerabilitățile sistemului nu m-au atins și pe mine.
                                </Typography>
                            </CardContent>

                            <div className="px-6">
                                <Grid className="flex justify-center" container spacing={5}>
                                    <Grid item xs={12} md={8}>
                                        <div style={{ maxWidth: '100%', margin: '0 auto' }}>
                                            <Carousel animation="slide" autoPlay={true} indicators={false}>
                                                {photos.map((photo, index) => (
                                                    <Paper key={index}>
                                                        <img
                                                            src={photo}
                                                            alt={`Photo ${index + 1}`}
                                                            style={{ width: "100%", height: "auto", borderRadius: "15px" }}
                                                        />
                                                    </Paper>
                                                ))}
                                            </Carousel>
                                        </div>
                                    </Grid>

                                    {/* Donation Top List */}
                                    <Grid item xs={12} md={3}>
                                        <Card elevation={3} style={{ padding: '20px', textAlign: 'left' }}>
                                            <Typography variant="h5" style={{ fontStyle: "italic", fontWeight: 'bold', marginBottom: '20px', textAlign: "center" }}>Donații</Typography>
                                            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                                                {donations.map((donor, index) => (
                                                    <li key={index} style={{ marginBottom: '10px' }}>
                                                        <Grid container alignItems="center">
                                                            {donor.rank <= 3 && (
                                                                <Grid item>
                                                                    <img src={donor.trophy} alt={`${donor.rank} trophy`} style={{ width: '50px', marginRight: '10px' }} />
                                                                </Grid>
                                                            )}
                                                            <Grid item>
                                                                <Typography variant="h6" style={getRankStyle(donor.rank)}>
                                                                    {donor.name} - {donor.amount} LEI
                                                                </Typography>
                                                                <Typography variant="body2" style={{ fontStyle: 'italic' }}>
                                                                    "{donor.message}"
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </li>
                                                ))}
                                            </ul>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className="mt-10 py-10 border-t border-gray-300 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <Card elevation={3}>
                                            <CardContent>
                                                <Typography style={{ fontSize: "20px" }} variant="body1" component="p" paragraph>
                                                    Micii învățăcei pe care i-am întâlnit sunt o comunitate de artiști și îmi doresc să îi încurajez cât de mult pot în dezvoltarea pasiunilor lor.
                                                </Typography>
                                                <Typography style={{ fontSize: "20px" }} variant="body1" component="p" paragraph>
                                                    Pentru a finanța Atelierul de piatră pe care vreau să-l organizez, am nevoie de materiale pentru ca acești copii să-și poată crea micile capodopere. Acestea vor fi scoase la licitație și vor reprezenta primii bani munciți de niște pitici de 10 ani, care își doresc să aibă un banchet la finalul anului școlar.
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>



                            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", padding: "25px", alignItems: "center" }}>
                                <div className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                                    <a>
                                        <img
                                            className="rounded-t-lg"
                                            src={photo_related1}
                                            alt=""
                                            style={{
                                                width: "100%",
                                                height: "200px",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </a>
                                    <div className="p-5">
                                        <a>
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                                Micii antreprenori
                                            </h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700">
                                            A venit timpul să vă spun povestea copiilor care fac parte din marea noastră familie. În clasă avem 8 elevi curajoși...
                                        </p>
                                        <a
                                            href="/Post1"
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                                        >
                                            Citeste mai mult
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                                    <a>
                                        <img
                                            className="rounded-t-lg"
                                            src={photo_related2}
                                            alt=""
                                            style={{
                                                width: "100%",
                                                height: "200px",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </a>
                                    <div className="p-5">
                                        <a>
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                                Eroii satului
                                            </h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700">
                                            În fiecare zi am ocazia să lucrez cu 10 elevi extraordinari, care își doresc să schimbe lumea prin educație. Ei sunt mici, dar ambițioși...
                                        </p>
                                        <a
                                            href="/Post1"
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                                        >
                                            Citeste mai mult
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                                    <a>
                                        <img
                                            className="rounded-t-lg"
                                            src={photo_related3}
                                            alt=""
                                            style={{
                                                width: "100%",
                                                height: "200px",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </a>
                                    <div className="p-5">
                                        <a>
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                                Micii artiști
                                            </h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700">
                                            A venit timpul să vă prezint și micii eroi
                                            pentru care sunt "Doamna". Clasa noastră
                                            este compusă din 6 elevi...
                                        </p>
                                        <a
                                            href="/Post1"
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                                        >
                                            Citeste mai mult
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5">
                                <CommentSection />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Add CommentSection component here */}

            </main>

            {/* CSS for Glitter Animation */}
            <style>{`
                @keyframes glitter-gold {
                    0% { text-shadow: 0px 0px 10px gold; }
                    100% { text-shadow: 0px 0px 20px gold; }
                }
                @keyframes glitter-silver {
                    0% { text-shadow: 0px 0px 10px silver; }
                    100% { text-shadow: 0px 0px 20px silver; }
                }
                @keyframes glitter-copper {
                    0% { text-shadow: 0px 0px 10px #cd7f32; }
                    100% { text-shadow: 0px 0px 20px #cd7f32; }
                }
            `}</style>
        </>
    );
};

export default Post1;
