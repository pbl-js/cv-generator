import React from "react";
import { Page, Document, Font } from "@react-pdf/renderer";
import PropTypes from "prop-types";
import styled from "@react-pdf/styled-components";

import phone from "assets/icons/phone.png";
import email from "assets/icons/email.png";
import home from "assets/icons/home.png";

Font.register({
  family: "Roboto",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf"
});

const Container = styled.View`
  width: 100%;
  height: 200%;
  display: flex;
  flex-direction: row;
  font-family: "Roboto";
`;

const Aside = styled.View`
  background-color: #283641;
  color: white;
  display: flex;
  height: 100%;
  width: 33%;
  padding: 30px;
`;

const Foto = styled.Image`
  width: 100%;
  height: 138px;
  border-radius: 200px;
  border: 2px solid white;
  margin: 0 0 30px 0;
`;

const Header = styled.Text`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 12px;
  margin-bottom: 5px;
  color: ${({ dark }) => (dark ? "#283641" : "white")};
`;

const Line = styled.View`
  width: ${({ small }) => {
    if (small) {
      return "30px";
    } else {
      return "100%";
    }
  }};
  background-color: ${({ dark }) => (dark ? "#283641" : "white")};
  height: ${({ bold }) => (bold ? "2px" : "1px")};
  opacity: ${({ bold }) => (bold ? 1 : 0.4)};
  display: block;
`;

const AsideLineSeparator = styled(Line)`
  margin-bottom: 20px;
`;

const AsideSmallConteiner = styled.View`
  margin: 20px 0;
`;

const EducationItem = styled.View`
  margin-bottom: 15px;
  &:nth-child(1) {
    margin-top: 100px;
  }
`;

const EducationItemHeader = styled.Text`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 10px;
  color: white;
  margin-bottom: 5px;
`;

const Paragraph = styled.Text`
  font-size: 10px;
  line-height: 1.2;
  opacity: 0.6;
  color: ${({ dark }) => (dark ? "#283641" : "white")};
`;

const Main = styled.View`
  height: 100%;
  width: 67%;
  background-color: white;
`;

const MainContainer = styled.View`
  width: 100%;
  display: flex;
  padding: 30px;
`;

const StyledHeader = styled(Header)`
  margin-top: 30px;
`;

const ExperienceItemContainer = styled.View`
  margin-top: 20px;
`;

const ExperienceHeader = styled(Header)`
  font-size: 11px;
  letter-spacing: 1px;
`;
const CompanyName = styled(Paragraph)`
  text-transform: capitalize;
  margin-bottom: 5px;
  font-size: 12px;
`;

const Description = styled(Paragraph)`
  margin-bottom: 15px;
`;

const MainHeaderComponent = ({ name, surname, position }) => {
  console.log(position);
  const MainHeader = styled.View`
    height: 168px;
    background-color: #e8e8e8;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const MainHeaderBigHeader = styled(Header)`
    letter-spacing: 6px;
    font-size: 25px;
    margin: 0;
  `;

  const MainHeaderLine = styled(Line)`
    width: 55%;
    margin: 10px 0;
  `;
  return (
    <MainHeader>
      <MainHeaderBigHeader size="big" dark>
        {`${name} ${surname}`}
      </MainHeaderBigHeader>
      <MainHeaderLine dark />
      <Header dark>{position}</Header>
    </MainHeader>
  );
};

const ContactsComponent = contacts => {
  const ContactType = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
  `;

  const ContactTypeCircle = styled.View`
    width: 20px;
    height: 20px;
    margin-right: 15px;
    border-radius: 50px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const ContactTypeIcon = styled.Image`
    width: 10px;
    height: 10px;
  `;

  const iconType = type => {
    switch (type) {
      case "phone":
        return <ContactTypeIcon src={phone} />;
      case "email":
        return <ContactTypeIcon src={email} />;
      case "website":
        return <ContactTypeIcon src={home} />;
      default:
        return home;
    }
  };

  return (
    <>
      <Header>kontakt</Header>
      <Line small bold />
      <AsideSmallConteiner>
        {/* {contacts.map(contact => (
          <ContactType key={contact.id}>
            <ContactTypeCircle>{iconType(contact.type)}</ContactTypeCircle>
            <Paragraph>{contact.body}</Paragraph>
          </ContactType>
        ))} */}
        <ContactType>
          <ContactTypeCircle>{iconType("phone")}</ContactTypeCircle>
          <Paragraph>{contacts.phone}</Paragraph>
        </ContactType>

        <ContactType>
          <ContactTypeCircle>{iconType("email")}</ContactTypeCircle>
          <Paragraph>{contacts.email}</Paragraph>
        </ContactType>

        <ContactType>
          <ContactTypeCircle>{iconType("website")}</ContactTypeCircle>
          <Paragraph>{contacts.website}</Paragraph>
        </ContactType>
      </AsideSmallConteiner>
      <AsideLineSeparator />
    </>
  );
};

const EducationsComponent = schools => {
  return (
    <>
      <Header>wykształcenie</Header>
      <Line small bold />
      <AsideSmallConteiner>
        {schools.items.map(school => {
          const { id, educationLevel, schoolName, specialization, start, end, current } = school;
          return (
            <EducationItem key={id}>
              <EducationItemHeader>{`${educationLevel} | ${specialization}`}</EducationItemHeader>
              <Paragraph>{schoolName}</Paragraph>
              <Paragraph>{`${start} - ${current ? "Obecnie" : end}`}</Paragraph>
            </EducationItem>
          );
        })}
      </AsideSmallConteiner>

      <AsideLineSeparator />
    </>
  );
};

const SkillsComponent = skills => {
  const SkillItem = styled.View`
    display: flex;
    margin-bottom: 7px;
    flex-direction: row;
    align-items: center;
  `;

  const SkillIcon = styled.View`
    background-color: white;
    width: 5px;
    height: 5px;
    border-radius: 10px;
    margin-right: 20px;
  `;
  return (
    <>
      <Header>umiejętności</Header>
      <Line small bold />

      <AsideSmallConteiner>
        {skills.items.map(skill => (
          <SkillItem key={skill.id}>
            <SkillIcon />
            <Paragraph>{skill.title}</Paragraph>
          </SkillItem>
        ))}
      </AsideSmallConteiner>
    </>
  );
};

const AboutMeComponent = aboutMe => {
  const StyledParagraph = styled(Paragraph)`
    margin: 30px 0;
  `;
  return (
    <>
      <Header dark>O mnie</Header>
      <Line small bold dark />
      <StyledParagraph dark>{aboutMe.text}</StyledParagraph>
    </>
  );
};

const ExperiencesComponent = experience => {
  return (
    <>
      <StyledHeader dark>Doświadczenie</StyledHeader>
      <Line small bold dark />

      {experience.items.map(experience => {
        const { id, position, company, city, start, end, description } = experience;
        return (
          <ExperienceItemContainer key={id} wrap={false}>
            <ExperienceHeader dark>{position}</ExperienceHeader>
            <CompanyName dark>{`${company} - ${city}`}</CompanyName>
            <Description dark>{description}</Description>
          </ExperienceItemContainer>
        );
      })}
    </>
  );
};

const MyDocument = ({ data }) => {
  const { personData, contact, schools, skills, experience, aboutMe } = data;
  console.log(personData);
  return (
    <Document>
      <Page>
        <Container>
          <Aside>
            <Foto src={personData.photo} />

            {ContactsComponent(contact)}

            {EducationsComponent(schools)}

            {SkillsComponent(skills)}
          </Aside>
          <Main>
            {MainHeaderComponent(personData)}
            <MainContainer>
              {AboutMeComponent(aboutMe)}
              <Line dark />
              {ExperiencesComponent(experience)}
            </MainContainer>
          </Main>
        </Container>
      </Page>
    </Document>
  );
};

// MyDocument.propTypes = {
//   data: PropTypes.shape({
//     mainInfo: PropTypes.shape({
//       photo: PropTypes.any,
//       name: PropTypes.string.isRequired,
//       surname: PropTypes.string.isRequired,
//       job: PropTypes.string
//     }),
//     contacts: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         type: PropTypes.oneOf(["phone", "email", "home"]).isRequired,
//         body: PropTypes.string.isRequired
//       })
//     ),
//     education: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         degree: PropTypes.string.isRequired,
//         academy: PropTypes.string.isRequired,
//         years: PropTypes.arrayOf([PropTypes.number])
//       })
//     ),
//     skills: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired
//       })
//     ),
//     aboutMe: PropTypes.string,
//     experiences: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         position: PropTypes.string.isRequired,
//         company: PropTypes.string.isRequired,
//         city: PropTypes.string,
//         description: PropTypes.string
//       })
//     )
//   })
// };

export default MyDocument;
