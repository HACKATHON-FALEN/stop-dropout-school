import React from "react";
import Carousel from 'react-material-ui-carousel';
import { Paper, Card, CardContent, Typography } from '@mui/material';
import photo_1 from '../assets/img/photo1.jpg';
import photo_2 from '../assets/img/photo2.jpg';
import photo_3 from '../assets/img/photo3.jpg';
import photo_4 from '../assets/img/photo4.jpg';

const Post1 = () => {
    const photos = [photo_1, photo_2, photo_3, photo_4];

    return (
        <>
            <main className="profile-page" style={{ marginTop: "80px" }}>
                <section className="relative py-16 bg-gray-300">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
                            <div className="px-6">
                                {/* Title */}
                                <div className="text-center mt-12">
                                    <h1 style={{ fontSize: '50px', fontWeight: 'bold' }}>Micii antreprenori</h1> {/* Large Title */}
                                </div>

                                {/* Carousel */}

                                <div className="flex flex-wrap justify-center">
                                    <div className="px-4">
                                        <Carousel animation="slide" autoPlay={true} indicators={false}>
                                            {photos.map((photo, index) => (
                                                <Paper key={index}> {/* Optional, for material look */}
                                                    <img
                                                        src={photo}
                                                        alt={`Photo ${index + 1}`}
                                                        style={{ width: "100%", height: "auto", borderRadius: "15px" }} // Added borderRadius here
                                                    />
                                                </Paper>
                                            ))}
                                        </Carousel>

                                        {/* Sample description */}
                                        <p className="mt-4 text-lg leading-relaxed text-gray-800">
                                            These are the young entrepreneurs who have worked hard to achieve their dreams.
                                        </p>
                                    </div>
                                </div>


                                {/* New Card with Text */}
                                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <Card elevation={3}>
                                                <CardContent>
                                                    <Typography variant="h4" gutterBottom>
                                                        Micii antreprenori
                                                    </Typography>
                                                    <Typography variant="body1" component="p" paragraph>
                                                        A venit timpul să vă prezint și micii eroi pentru care sunt „Doamna”. Clasa noastră este compusă din 6 elevi de clasa a IV-a și 4 elevi de clasa a III-a, iar deviza noastră este „A doua familie este la școală!”
                                                    </Typography>
                                                    <Typography variant="body1" component="p" paragraph>
                                                        Gândul meu în educație a fost inspirat de echipa Teach for Romania, o organizație construită de oameni pentru oameni, dar asta nu înseamnă că valorile biblice și încrederea nu m-au atins și pe mine.
                                                    </Typography>
                                                    <Typography variant="body1" component="p" paragraph>
                                                        Elevii măreției pe care i-am întâlnit sunt cu adevărat o comunitate de copii și tineri deseori neînțeleși, iar curajul lor de a visa este un dar pentru dezvoltarea României.
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
        </>
    );
};

export default Post1;
