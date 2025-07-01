import livingImg from '../assets/project1.jpg';
import kitchenImg from '../assets/project2.jpg';
import dressingImg from '../assets/project3.jpg';
import diningImg from '../assets/project4.jpg';
import bedroomImg from '../assets/project5.jpg';
import officeImg from '../assets/project6.jpg';
import Project8 from '../assets/project8.jpg';

export const portfolioData = [
    {
        title: 'Living Area',
        image: livingImg,
        description:
            'Stylish and cozy living areas designed with modern aesthetics and maximum comfort in mind.',
        button: 'Continue Reading →',
        span: false,
    },
    {
        title: 'Super Gloss',
        image: kitchenImg,
        description:
            'Super gloss enamel is a top quality enamel made from the highest quality alkyd syntheic resin with carefully selected high-fast pigments which ensure mazimum color retention..',
        button: 'Continue Reading →',
        span: true, // This will make it span 2 columns
    },
    {
        title: 'Matt Finish',
        image: dressingImg,
        description:
            'Organized and elegant dressing areas that combine space-saving features with luxury design.',
        button: 'Continue Reading →',
        span: false,
    },
    {
        title: 'Dining Area',
        image: diningImg,
        description:
            'Sophisticated dining spaces perfect for family dinners and social gatherings.',
        button: 'Continue Reading →',
        span: false,
    },
    {
        title: 'Weather Care',
        image: bedroomImg,
        description:
            'Relaxing bedrooms designed to provide a serene atmosphere and restful sleep.',
        button: 'Continue Reading →',
        span: false,
    },
    {
        title: 'Automative',
        image: officeImg,
        description:
            'Whether you are painting a car or any vehicle Picasso Auto Refinish provides access to a range of high quality products.',
        button: 'Continue Reading →',
        span: false,
    },
    {
        title: 'Accent Wall Highlight',
        image: Project8,
        description:
            'Bring any room to life with bold and beautiful accent walls. Our paints offer stunning color depth and smooth finishes that add character to your space.',
        button: 'Continue Reading →',
        span: true, // This will make it span 2 columns
    }
];