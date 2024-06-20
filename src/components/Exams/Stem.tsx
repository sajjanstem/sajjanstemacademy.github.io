import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Stem.css";

const Stem = () => {
  return (
    <Box className="p-4">
      <img src={process.env.PUBLIC_URL + '/assets/STEMGENIUSHUNT.png'} alt="" style={{ width: '100%', height: 'auto' }} />
      <Typography variant="h1" gutterBottom>Stem</Typography>
      <Typography variant="body1" paragraph>
        Stem Genius Hunt Examinations are beneficial for school students because they promote critical thinking, problem-solving skills, and a deeper understanding of mathematical concepts beyond the regular curriculum. These competitions challenge students to apply their knowledge in innovative ways, fostering intellectual growth and encouraging a love for mathematics. Additionally, participating in such exams can boost students' confidence, provide recognition for their abilities, and open up opportunities for scholarships and advanced educational programs. This not only enhances their academic profile but also prepares them for future academic and professional success.
      </Typography>
      <Typography variant="body1" paragraph>
        Stem Genius Hunt Examinations are beneficial for school students because they promote critical thinking, problem-solving skills, and a deeper understanding of mathematical concepts beyond the regular curriculum. These competitions challenge students to apply their knowledge in innovative ways, fostering intellectual growth and encouraging a love for mathematics. Additionally, participating in such exams can boost students' confidence, provide recognition for their abilities, and open up opportunities for scholarships and advanced educational programs. This not only enhances their academic profile but also prepares them for future academic and professional success.
      </Typography>

      <Box mt={4}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Classes 1 to 5</b></TableCell>
                <TableCell align="right"><b>No. Of Questions</b></TableCell>
                <TableCell align="right"><b>Marks (per question)</b></TableCell>
                <TableCell align="right"><b>Total Marks</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Section 1: Science </TableCell>
                <TableCell align="right">10 </TableCell>
                <TableCell align="right">1</TableCell>
                <TableCell align="right">10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Section2: Technology & Engineering</TableCell>
                <TableCell align="right">15</TableCell>
                <TableCell align="right">1</TableCell>
                <TableCell align="right">15</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Section3: Mathematics </TableCell>
                <TableCell align="right">5</TableCell>
                <TableCell align="right">2</TableCell>
                <TableCell align="right">10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><b>Total</b></TableCell>
                <TableCell align="right">30</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">35</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box mt={4}>
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Classes 6 to 10</b></TableCell>
                <TableCell align="right"><b>No. Of Questions</b></TableCell>
                <TableCell align="right"><b>Marks (per question)</b></TableCell>
                <TableCell align="right"><b>Total Marks</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Section 1: Science </TableCell>
                <TableCell align="right">10 </TableCell>
                <TableCell align="right">1</TableCell>
                <TableCell align="right">10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Section2: Technology & Engineering</TableCell>
                <TableCell align="right">25</TableCell>
                <TableCell align="right">1</TableCell>
                <TableCell align="right">25</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Section3: Mathematics </TableCell>
                <TableCell align="right">5</TableCell>
                <TableCell align="right">3</TableCell>
                <TableCell align="right">15</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><b>Total</b></TableCell>
                <TableCell align="right">40</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">50</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box mt={4}>
        <Typography variant="h4" gutterBottom>Syllabus</Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Class 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <b>Section 1: Science </b><br />   
              Me and My Body, Plants around Us, Animals around Us, Living and Non-Living, Our Needs, Good Habits, Earth and Sky, Transport.
              <br /><br />
              <b>Section 2: Technology & Engineering</b><br />
              Me and My Body, Plants around Us, Animals around Us, Living and Non-Living, Our Needs, Good Habits, Earth and Sky, Transport.
              <br /><br />
              <b>Section 3: Mathematics</b> <br />
              Shapes and Sizes, Number System, Addition, Subtraction, Time, Money, Measurement, Patterns.
              </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Class 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <b>Section 1: Science </b><br />   
              Festival and Celebration, The Night Sky, Food, Clothing and Shelter, Transport and Communication, Know Your Body, Occupation, Good Habits and Safety Rule, Plants around Us, Animals around Us, Air, Water and Weather.
              <br /><br />
              <b>Section 2: Science</b><br />
              Festival and Celebration, The Night Sky, Food, Clothing and Shelter, Transport and Communication, Know Your Body, Occupation, Good Habits and Safety Rule, Plants around Us, Animals around Us, Air, Water and Weather.
              <br /><br />
              <b>Section 3: Mathematics</b> <br />
              Lines and Shapes, Number system, Addition, Subtraction, Time, Money, Measurement, Patterns.
              </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Class 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <b>Section 1: Science </b><br />   
              Food, Transport and Communication, Housing and Clothing, Birds, Plants, Animals, Living and Non-Living, Human Body, Weather and Sky, Light and Sound.
              <br /><br />
              <b>Section 2: Science</b><br />
              Food, Transport and Communication, Housing and Clothing, Birds, Plants, Animals, Living and Non-Living, Human Body, Weather and Sky, Light and Sound.
            <br /><br />
              <b>Section 3: Mathematics</b> <br />
              Basic Geometric Shapes, Number System, Addition & Subtraction, Multiplication & Division, Fractions, Measurement, Time & Calendar, Data Handling. 
              </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Class 4</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <b>Section 1: Science </b><br />   
              States of Matter, Birds, Clothing, Animal, Earth and its Neighbour, Our body, Plants, Environment, Food. 
              <br /><br />
              <b>Section 2: Science</b><br />
              States of Matter, Birds, Clothing, Animal, Earth and its Neighbour, Our body, Plants, Environment, Food. 
              <br /><br />
              <b>Section 3: Mathematics</b> <br />
              Basic Geometric Shapes, Number System, Addition & Subtraction, Multiplication & Division, Fractions, Measurement, Time & Calendar, Data Handling.
              </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Class 5</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <b>Section 1: Science </b><br />   
              States of Matter, Environment and Us, Busy at Work - Our Internal Organs, Community and Health Hygiene, Force, Work, and Energy, Solar System, Natural Resources, Fuels and Energy, All about Crop, Sense and Emotion, Disease and Its Prevention.
              <br /><br />
              <b>Section 2: Science</b><br />
              States of Matter, Environment and Us, Busy at Work - Our Internal Organs, Community and Health Hygiene, Force, Work, and Energy, Solar System, Natural Resources, Fuels and Energy, All about Crop, Sense and Emotion, Disease and Its Prevention.
              <br /><br />
              <b>Section 3: Mathematics</b> <br />
              Concept of Geometry, Number System, Factors & Multiples, Addition & Subtraction, Multiplication & Division, Fractions & Decimals, Measurement, Data Handling.
              </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Class 6</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <b>Section 1: Science </b><br />   
              Components of Food, Sorting Materials into Groups, Separation of Substances, Getting to Know Plants, Body Movements, The Living Organisms — Characteristics and Habitats, Motion and Measurement of Distances, Light, Shadows and Reflections, Electricity and Circuits, Fun with Magnets, Air Around Us.
              <br /><br />
              <b>Section 2: Science</b><br />
              Components of Food, Sorting Materials into Groups, Separation of Substances, Getting to Know Plants, Body Movements, The Living Organisms — Characteristics and Habitats, Motion and Measurement of Distances, Light, Shadows and Reflections, Electricity and Circuits, Fun with Magnets, Air Around Us.
              <br /><br />
              <b>Section 3: Mathematics</b> <br />
              Knowing Our Numbers, Whole Numbers, Playing with Numbers, Basic Geometrical Ideas, Understanding Elementary Shapes, Integers, Fractions, Decimals, Data Handling, Mensuration, Algebra, Ratio and Proportion.
              </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Class 7</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <b>Section 1: Science </b><br />   
              Nutrition in Plants, Nutrition in Animals, Heat, Acids, Bases and Salts, Physical and Chemical Changes, Respiration in Organisms, Transportation in Animals and Plants, Reproduction in Plants, Motion and Time, Electric Current and its Effects, Light, Forests: Our Lifeline, Wastewater Story. 
              <br /><br />
              <b>Section 2: Science</b><br />
              Nutrition in Plants, Nutrition in Animals, Heat, Acids, Bases and Salts, Physical and Chemical Changes, Respiration in Organisms, Transportation in Animals and Plants, Reproduction in Plants, Motion and Time, Electric Current and its Effects, Light, Forests: Our Lifeline, Wastewater Story. 
              <br /><br />
              <b>Section 3: Mathematics</b> <br />
              Integers, Fractions and Decimals, Data Handling, Simple Equations, Lines and Angles, The Triangle and its Properties, Comparing Quantities, Rational Numbers, Perimeter and Area, Algebraic Expressions, Exponents and Powers, Symmetry, Visualising Solid Shapes.
              </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Class 8</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <b>Section 1: Science </b><br />   
              Crop Production and Management, Microorganisms: Friend and Foe, Coal and Petroleum, Combustion and Flame, Conservation of Plants and Animals, Reproduction in Animals, Reaching the Age of Adolescence, Force and Pressure, Friction, Sound.
              <br /><br />
              <b>Section 2: Science</b><br />
              Crop Production and Management, Microorganisms: Friend and Foe, Coal and Petroleum, Combustion and Flame, Conservation of Plants and Animals, Reproduction in Animals, Reaching the Age of Adolescence, Force and Pressure, Friction, Sound.
              <br /><br />
              <b>Section 3: Mathematics</b> <br />
              Rational Numbers, Linear Equations in One Variable, Understanding Quadrilaterals, Data Handling, Squares and Square Roots, Cubes and Cube Roots, Comparing Quantities, Algebraic Expressions and Identities, Mensuration, Exponents and Powers, Direct and Inverse Proportions, Factorisation, Introduction to Graphs.
              </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Class 9</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <b>Section 1: Science </b><br />   
              Matter in Our Surroundings, Is Matter Around Us Pure?, Atoms and Molecules, Structure of the Atom, The Fundamental Unit of Life, Tissues, Motion, Force and Laws of Motion, Gravitation, Work and Energy, Sound, Improvement in Food Resources.
              <br /><br />
              <b>Section 2: Science</b><br />
              Matter in Our Surroundings, Is Matter Around Us Pure?, Atoms and Molecules, Structure of the Atom, The Fundamental Unit of Life, Tissues, Motion, Force and Laws of Motion, Gravitation, Work and Energy, Sound, Improvement in Food Resources.
              <br /><br />
              <b>Section 3: Mathematics</b> <br />
              Number Systems, Polynomials, Coordinate Geometry, Linear Equations in Two Variables, Introduction to Euclid’s Geometry, Lines and Angles, Triangles, Quadrilaterals, Circles, Heron’s Formula, Surface Areas and Volumes, Statistics.
              </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Class 10</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <b>Section 1: Science </b><br />   
              Chemical Reactions and Equations, Acids, Bases and Salts, Metals and Non-metals, Carbon and its Compounds, Life Processes, Control and Coordination, How do Organisms Reproduce?, Heredity, Light – Reflection and Refraction, The Human Eye and the Colourful World, Electricity, Magnetic Effects of Electric Current, Our Environment.
              <br /><br />
              <b>Section 2: Science</b><br />
              Chemical Reactions and Equations, Acids, Bases and Salts, Metals and Non-metals, Carbon and its Compounds, Life Processes, Control and Coordination, How do Organisms Reproduce?, Heredity, Light – Reflection and Refraction, The Human Eye and the Colourful World, Electricity, Magnetic Effects of Electric Current, Our Environment.
              <br /><br />
              <b>Section 3: Mathematics</b> <br />
              Real Numbers, Polynomials, Pair of Linear Equations in Two Variables, Quadratic Equations, Arithmetic Progressions, Triangles, Coordinate Geometry, Introduction to Trigonometry, Some Applications of Trigonometry, Circles, Areas Related to Circles, Surface Areas and Volumes, Statistics, Probability.
              </Typography>
          </AccordionDetails>
        </Accordion>


      </Box>

    </Box>
  );
};

export default Stem;
