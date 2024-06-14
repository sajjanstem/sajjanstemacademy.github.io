import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // prevArrow: <button className="slick-prev slick-arrow" aria-label="Previous" type="button" />,
    // nextArrow: <button className="slick-next slick-arrow" aria-label="Next" type="button" />,
  };
 
  return (
    <div className="p-4 flex flex-col gap-8">
      <div className="mb-8">
        <Slider {...settings}>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/assets/STEMGENIUSHUNT.png"}
              alt="STEM Genius Hunt"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/assets/STEMGENIUSHUNT.png"}
              alt="STEM Genius Hunt"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/assets/STEMGENIUSHUNT.png"}
              alt="STEM"
            />
          </div>
        </Slider>
      </div>

      <div className="text-3xl font-bold text-center mb-4">
        Welcome to Sajjan STEM Organisation
      </div>
      <div className="text-lg text-justify mb-8">
        Welcome to Sajjan STEM Organisation, a pioneering educational initiative
        dedicated to nurturing young minds through our comprehensive range of
        talent hunt examinations. Our mission is to foster a deep understanding
        and passion for STEM (Science, Technology, Engineering, Mathematics)
        subjects among students from classes 1 to 10. By promoting critical
        thinking, problem-solving skills, and innovative application of
        knowledge, we aim to prepare students for future academic and
        professional success.
      </div>

      <div className="flex flex-row gap-8 ss-background ss-text p-5">
        <div className="flex w-6/12 p-3 flex-col gap-6">
          <p className="text-3xl font-bold text-black">STEM Genius Hunt Examinations </p>
          STEM Genius Hunt Examinations STEM Genius Hunt Examinations are
          designed to enhance critical thinking and problem-solving skills in
          STEM subjects. These exams promote digital literacy, coding, and AI,
          aligning with the National Education Policy 2020. They prepare
          students for success in a rapidly evolving technological landscape by
          fostering a passion for STEM subjects, motivating them to pursue
          higher studies, and equipping them for global challenges. These
          examinations benefit school students by promoting critical thinking,
          problem-solving skills, and a deeper understanding of STEM concepts
          beyond the regular curriculum. They challenge students to apply their
          knowledge innovatively, fostering intellectual growth and encouraging
          a love for STEM. Additionally, participation in these exams can boost
          students' confidence, provide recognition for their abilities, and
          open opportunities for scholarships and advanced educational programs.
          This not only enhances their academic profiles but also prepares them
          for future academic and professional success.
        </div>
        <div className="flex w-6/12 p-8 pt-16">
            <img
                src={process.env.PUBLIC_URL + "/assets/STEMGENIUSHUNT.png"}
                alt="STEM"
              />
             
        </div>
      </div>

      <div className="flex flex-row gap-8 p-5 ss-text">
      <div className="flex w-6/12 p-8 pt-16">
            <img
                src={process.env.PUBLIC_URL + "/assets/STEMGENIUSHUNT.png"}
                alt="STEM"
              />
             
        </div>
        <div className="flex w-6/12 p-3 flex-col gap-6">
          <p className="text-3xl font-bold text-black">Maths Genius Hunt Examinations </p>
          STEM Genius Hunt Examinations STEM Genius Hunt Examinations are
          designed to enhance critical thinking and problem-solving skills in
          STEM subjects. These exams promote digital literacy, coding, and AI,
          aligning with the National Education Policy 2020. They prepare
          students for success in a rapidly evolving technological landscape by
          fostering a passion for STEM subjects, motivating them to pursue
          higher studies, and equipping them for global challenges. These
          examinations benefit school students by promoting critical thinking,
          problem-solving skills, and a deeper understanding of STEM concepts
          beyond the regular curriculum. They challenge students to apply their
          knowledge innovatively, fostering intellectual growth and encouraging
          a love for STEM. Additionally, participation in these exams can boost
          students' confidence, provide recognition for their abilities, and
          open opportunities for scholarships and advanced educational programs.
          This not only enhances their academic profiles but also prepares them
          for future academic and professional success.
        </div>
      </div>

      <div className="flex flex-row gap-8 ss-background ss-text p-5">
        <div className="flex w-6/12 p-3 flex-col gap-6">
          <p className="text-3xl font-bold text-black">Science Genius Hunt Examinations </p>
          STEM Genius Hunt Examinations STEM Genius Hunt Examinations are
          designed to enhance critical thinking and problem-solving skills in
          STEM subjects. These exams promote digital literacy, coding, and AI,
          aligning with the National Education Policy 2020. They prepare
          students for success in a rapidly evolving technological landscape by
          fostering a passion for STEM subjects, motivating them to pursue
          higher studies, and equipping them for global challenges. These
          examinations benefit school students by promoting critical thinking,
          problem-solving skills, and a deeper understanding of STEM concepts
          beyond the regular curriculum. They challenge students to apply their
          knowledge innovatively, fostering intellectual growth and encouraging
          a love for STEM. Additionally, participation in these exams can boost
          students' confidence, provide recognition for their abilities, and
          open opportunities for scholarships and advanced educational programs.
          This not only enhances their academic profiles but also prepares them
          for future academic and professional success.
        </div>
        <div className="flex w-6/12 p-8 pt-16">
            <img
                src={process.env.PUBLIC_URL + "/assets/STEMGENIUSHUNT.png"}
                alt="STEM"
              />
             
        </div>
      </div>

      <div className="text-2xl font-semibold mb-4">Our Exams</div>
      <div className="text-lg mb-8">
        At Sajjan STEM Organisation, we offer three major examinations:
        <ul className="list-disc list-inside ml-4">
          <li>STEM Genius Hunt</li>
          <li>MATHS Genius Hunt</li>
          <li>SCIENCE Genius Hunt</li>
        </ul>
        Each of these exams is designed to challenge and inspire students,
        encouraging them to go beyond their regular curriculum and explore new
        concepts and ideas. Our exams are structured into two levels, ensuring a
        thorough assessment of each student's abilities and knowledge.
      </div>

      <div className="text-2xl font-semibold mb-4">
        Why Participate in Our Genius Hunts?
      </div>
      <div className="text-lg mb-8">
        <div className="font-bold">STEM Genius Hunt Examinations</div>
        Enhance critical thinking and problem-solving skills in STEM subjects,
        promoting digital literacy, coding, and AI in line with the National
        Education Policy 2020. These exams prepare students for success in a
        rapidly changing technological landscape by fostering a passion for STEM
        subjects, motivating them to pursue higher studies, and preparing them
        for global challenges.
      </div>
      <div className="text-lg mb-8">
        <div className="font-bold">Maths Genius Hunt Examinations</div>
        Promote critical thinking and problem-solving skills, fostering
        intellectual growth and a love for mathematics. These competitions
        challenge students to apply their knowledge innovatively, boosting their
        confidence, providing recognition, and opening up opportunities for
        scholarships and advanced educational programs.
      </div>
      <div className="text-lg mb-8">
        <div className="font-bold">Science Genius Hunt Examinations</div>
        Encourage an inquisitive mindset and a hands-on approach to learning.
        These exams push students to explore scientific principles deeply, apply
        theoretical knowledge to practical problems, and engage in experiments
        that foster a greater understanding of the natural world. Success in
        these examinations can lead to recognition, scholarships, and
        opportunities in science-focused educational and career paths.
      </div>

      <div className="text-2xl font-semibold mb-4">
        Syllabus and Exam Pattern
      </div>
      <div className="text-lg mb-8">
        All questions in our exams are objective type with no negative marking.
        The syllabus and exam pattern are aligned with the NCERT curriculum,
        ensuring relevance and comprehensiveness:
        <ul className="list-disc list-inside ml-4">
          <li>
            <strong>STEM:</strong> Covers Science (NCERT syllabus), Technology &
            Engineering (AI, coding, reasoning), and Maths (NCERT syllabus).
          </li>
          <li>
            <strong>Maths:</strong> Includes sections on Reasoning & Aptitude,
            Maths (NCERT syllabus), and higher-order thinking questions.
          </li>
          <li>
            <strong>Science:</strong> Comprises sections on Reasoning &
            Aptitude, Science (NCERT syllabus), and higher-order thinking
            questions.
          </li>
        </ul>
      </div>

      <div className="text-2xl font-semibold mb-4">Recognition and Awards</div>
      <div className="text-lg mb-8">
        To celebrate and recognize the hard work and talent of our participants,
        we offer cash prizes, trophies, and medals for rank holders and class
        toppers, highlighting their achievements and encouraging excellence.
      </div>

      <div className="text-2xl font-semibold mb-4">Get Involved</div>
      <div className="text-lg mb-8">
        Participating in the Sajjan STEM Organisation's Genius Hunt exams is an
        excellent way for students to demonstrate their knowledge, skills, and
        enthusiasm for STEM subjects. Our exams provide a platform for young
        minds to shine, fostering innovation, creativity, and a lifelong love
        for learning. Join us in our mission to inspire and educate the next
        generation of STEM leaders!
      </div>
    </div>
  );
};

export default Home;