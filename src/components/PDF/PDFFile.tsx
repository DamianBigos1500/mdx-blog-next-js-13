import { Document, Page, Text, StyleSheet, View } from '@react-pdf/renderer';
import { FC, ReactNode } from 'react';

interface PDFFileProps {
  children?: ReactNode;
}
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const PDFFile: FC<PDFFileProps> = ({ children }) => {
  return (
    <Document>
      <Page size="A4">
        <View style={styles.section}>
          <Text>asdasdasdasda</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFFile;
