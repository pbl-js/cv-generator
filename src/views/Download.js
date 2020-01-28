import React, { useEffect, useState } from "react";

import PDFDownload from "components/pdfGenerator/PDFDownload";
import AddInfoTemplate from "templates/AddInfoTemplate.js";
import Button from "components/atoms/Button";
import Header from "components/atoms/Header";
import Paragraph from "components/atoms/Paragraph";

const Template = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1);
  });

  return (
    <AddInfoTemplate title="Pobieranie dokumentu">
      <Header>Gratulacje! Twoje CV jest już gotowe do pobrania</Header>

      {loading ? <PDFDownload /> : null}

      <Paragraph>
        Mamy nadzieję, że będziesz zadowolony ze swojej nowej pracy. Jeżeli jesteś zadowolony ze swojego CV, będziemy
        niesamowicie wdzięczni za udostępnienie linka do strony znajomym
      </Paragraph>
    </AddInfoTemplate>
  );
};

export default Template;
