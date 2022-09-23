import React from "react"
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
} from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: "green",
        color: "white",
    },
    section: {
        margin: 10,
        padding: 10,
    },
    viewer: {
        width: window.innerWidth, //the pdf viewer will take up all of the width and height
        height: window.innerHeight,
    },
});

// Create Document Component
function BasicDocument() {
    return (
        <PDFViewer style={styles.viewer}>
            {/* Start of the document*/}
            <Document>
                {/*render a single page*/}
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere velit magna, id aliquam erat rutrum a. Mauris vitae fringilla elit, nec vehicula felis. Aenean in consequat ligula. In hac habitasse platea dictumst. Cras hendrerit est nec mollis laoreet. Vivamus lobortis arcu felis, ac vulputate purus facilisis ac. Donec semper, elit eget scelerisque volutpat, odio odio laoreet est, eget convallis leo augue ut augue. In ac eleifend arcu, sit amet placerat mi. Nulla pellentesque lectus quis nisl molestie porttitor. Mauris ut mollis ligula. Donec vitae lorem maximus, molestie turpis et, condimentum quam. Curabitur ultricies quam massa, quis ullamcorper enim sollicitudin a. Nullam ut sodales urna.

                            Pellentesque ut molestie lectus. Aliquam erat volutpat. In eu elit quis urna euismod tempor. Nulla nisl lectus, dignissim at finibus fermentum, consequat nec est. Cras fermentum, sem sed fringilla malesuada, erat leo iaculis quam, semper faucibus urna tellus vel mauris. Maecenas eget ligula felis. Mauris mollis, ipsum at elementum blandit, velit leo interdum augue, non rhoncus mauris felis in massa. Morbi sit amet ex auctor, efficitur lectus nec, dignissim justo. Suspendisse odio leo, cursus a mollis vitae, rhoncus suscipit sapien. Morbi id libero pellentesque, dignissim nisi in, gravida urna. Nunc a congue ex. Integer et eros id nulla semper blandit. Nam vulputate non elit at lobortis. Suspendisse condimentum sit amet justo a pharetra. Sed ac ligula vehicula sapien interdum posuere. Praesent at condimentum eros.

                            Aenean orci dolor, vestibulum sed sapien a, blandit tincidunt augue. Sed quis dui quam. Etiam sodales odio at felis lobortis, in pellentesque arcu consectetur. Proin id odio molestie, vehicula neque blandit, fermentum dui. Praesent eget bibendum lacus, eget condimentum tellus. Donec libero odio, varius et condimentum vitae, dictum at dolor. Nulla facilisi. Sed tincidunt ligula ut quam porttitor, nec facilisis mauris imperdiet. Vivamus venenatis tempus pellentesque. Maecenas maximus congue hendrerit. Etiam neque magna, fringilla a tempus cursus, tincidunt nec diam. In luctus elit eget turpis ullamcorper auctor. Fusce blandit vestibulum malesuada.

                            Vestibulum in eros id massa hendrerit pellentesque. Nulla at magna sit amet leo finibus vulputate. Sed eget ultricies sem. Nullam sollicitudin consectetur ligula, in interdum quam cursus interdum. Aliquam faucibus a nibh eget posuere. Donec faucibus, ipsum id varius laoreet, mi mauris auctor lorem, in pharetra odio felis a felis. Curabitur efficitur quam quis placerat vulputate. Vivamus porta tempus turpis, in viverra ante hendrerit a. Vestibulum tellus nunc, interdum ut congue vel, pellentesque eu urna. Sed malesuada venenatis orci id vulputate.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere velit magna, id aliquam erat rutrum a. Mauris vitae fringilla elit, nec vehicula felis. Aenean in consequat ligula. In hac habitasse platea dictumst. Cras hendrerit est nec mollis laoreet. Vivamus lobortis arcu felis, ac vulputate purus facilisis ac. Donec semper, elit eget scelerisque volutpat, odio odio laoreet est, eget convallis leo augue ut augue. In ac eleifend arcu, sit amet placerat mi. Nulla pellentesque lectus quis nisl molestie porttitor. Mauris ut mollis ligula. Donec vitae lorem maximus, molestie turpis et, condimentum quam. Curabitur ultricies quam massa, quis ullamcorper enim sollicitudin a. Nullam ut sodales urna.

                            Pellentesque ut molestie lectus. Aliquam erat volutpat. In eu elit quis urna euismod tempor. Nulla nisl lectus, dignissim at finibus fermentum, consequat nec est. Cras fermentum, sem sed fringilla malesuada, erat leo iaculis quam, semper faucibus urna tellus vel mauris. Maecenas eget ligula felis. Mauris mollis, ipsum at elementum blandit, velit leo interdum augue, non rhoncus mauris felis in massa. Morbi sit amet ex auctor, efficitur lectus nec, dignissim justo. Suspendisse odio leo, cursus a mollis vitae, rhoncus suscipit sapien. Morbi id libero pellentesque, dignissim nisi in, gravida urna. Nunc a congue ex. Integer et eros id nulla semper blandit. Nam vulputate non elit at lobortis. Suspendisse condimentum sit amet justo a pharetra. Sed ac ligula vehicula sapien interdum posuere. Praesent at condimentum eros.

                            Aenean orci dolor, vestibulum sed sapien a, blandit tincidunt augue. Sed quis dui quam. Etiam sodales odio at felis lobortis, in pellentesque arcu consectetur. Proin id odio molestie, vehicula neque blandit, fermentum dui. Praesent eget bibendum lacus, eget condimentum tellus. Donec libero odio, varius et condimentum vitae, dictum at dolor. Nulla facilisi. Sed tincidunt ligula ut quam porttitor, nec facilisis mauris imperdiet. Vivamus venenatis tempus pellentesque. Maecenas maximus congue hendrerit. Etiam neque magna, fringilla a tempus cursus, tincidunt nec diam. In luctus elit eget turpis ullamcorper auctor. Fusce blandit vestibulum malesuada.

                            Vestibulum in eros id massa hendrerit pellentesque. Nulla at magna sit amet leo finibus vulputate. Sed eget ultricies sem. Nullam sollicitudin consectetur ligula, in interdum quam cursus interdum. Aliquam faucibus a nibh eget posuere. Donec faucibus, ipsum id varius laoreet, mi mauris auctor lorem, in pharetra odio felis a felis. Curabitur efficitur quam quis placerat vulputate. Vivamus porta tempus turpis, in viverra ante hendrerit a. Vestibulum tellus nunc, interdum ut congue vel, pellentesque eu urna. Sed malesuada venenatis orci id vulputate.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere velit magna, id aliquam erat rutrum a. Mauris vitae fringilla elit, nec vehicula felis. Aenean in consequat ligula. In hac habitasse platea dictumst. Cras hendrerit est nec mollis laoreet. Vivamus lobortis arcu felis, ac vulputate purus facilisis ac. Donec semper, elit eget scelerisque volutpat, odio odio laoreet est, eget convallis leo augue ut augue. In ac eleifend arcu, sit amet placerat mi. Nulla pellentesque lectus quis nisl molestie porttitor. Mauris ut mollis ligula. Donec vitae lorem maximus, molestie turpis et, condimentum quam. Curabitur ultricies quam massa, quis ullamcorper enim sollicitudin a. Nullam ut sodales urna.

                            Pellentesque ut molestie lectus. Aliquam erat volutpat. In eu elit quis urna euismod tempor. Nulla nisl lectus, dignissim at finibus fermentum, consequat nec est. Cras fermentum, sem sed fringilla malesuada, erat leo iaculis quam, semper faucibus urna tellus vel mauris. Maecenas eget ligula felis. Mauris mollis, ipsum at elementum blandit, velit leo interdum augue, non rhoncus mauris felis in massa. Morbi sit amet ex auctor, efficitur lectus nec, dignissim justo. Suspendisse odio leo, cursus a mollis vitae, rhoncus suscipit sapien. Morbi id libero pellentesque, dignissim nisi in, gravida urna. Nunc a congue ex. Integer et eros id nulla semper blandit. Nam vulputate non elit at lobortis. Suspendisse condimentum sit amet justo a pharetra. Sed ac ligula vehicula sapien interdum posuere. Praesent at condimentum eros.

                            Aenean orci dolor, vestibulum sed sapien a, blandit tincidunt augue. Sed quis dui quam. Etiam sodales odio at felis lobortis, in pellentesque arcu consectetur. Proin id odio molestie, vehicula neque blandit, fermentum dui. Praesent eget bibendum lacus, eget condimentum tellus. Donec libero odio, varius et condimentum vitae, dictum at dolor. Nulla facilisi. Sed tincidunt ligula ut quam porttitor, nec facilisis mauris imperdiet. Vivamus venenatis tempus pellentesque. Maecenas maximus congue hendrerit. Etiam neque magna, fringilla a tempus cursus, tincidunt nec diam. In luctus elit eget turpis ullamcorper auctor. Fusce blandit vestibulum malesuada.

                            Vestibulum in eros id massa hendrerit pellentesque. Nulla at magna sit amet leo finibus vulputate. Sed eget ultricies sem. Nullam sollicitudin consectetur ligula, in interdum quam cursus interdum. Aliquam faucibus a nibh eget posuere. Donec faucibus, ipsum id varius laoreet, mi mauris auctor lorem, in pharetra odio felis a felis. Curabitur efficitur quam quis placerat vulputate. Vivamus porta tempus turpis, in viverra ante hendrerit a. Vestibulum tellus nunc, interdum ut congue vel, pellentesque eu urna. Sed malesuada venenatis orci id vulputate.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere velit magna, id aliquam erat rutrum a. Mauris vitae fringilla elit, nec vehicula felis. Aenean in consequat ligula. In hac habitasse platea dictumst. Cras hendrerit est nec mollis laoreet. Vivamus lobortis arcu felis, ac vulputate purus facilisis ac. Donec semper, elit eget scelerisque volutpat, odio odio laoreet est, eget convallis leo augue ut augue. In ac eleifend arcu, sit amet placerat mi. Nulla pellentesque lectus quis nisl molestie porttitor. Mauris ut mollis ligula. Donec vitae lorem maximus, molestie turpis et, condimentum quam. Curabitur ultricies quam massa, quis ullamcorper enim sollicitudin a. Nullam ut sodales urna.

                            Pellentesque ut molestie lectus. Aliquam erat volutpat. In eu elit quis urna euismod tempor. Nulla nisl lectus, dignissim at finibus fermentum, consequat nec est. Cras fermentum, sem sed fringilla malesuada, erat leo iaculis quam, semper faucibus urna tellus vel mauris. Maecenas eget ligula felis. Mauris mollis, ipsum at elementum blandit, velit leo interdum augue, non rhoncus mauris felis in massa. Morbi sit amet ex auctor, efficitur lectus nec, dignissim justo. Suspendisse odio leo, cursus a mollis vitae, rhoncus suscipit sapien. Morbi id libero pellentesque, dignissim nisi in, gravida urna. Nunc a congue ex. Integer et eros id nulla semper blandit. Nam vulputate non elit at lobortis. Suspendisse condimentum sit amet justo a pharetra. Sed ac ligula vehicula sapien interdum posuere. Praesent at condimentum eros.

                            Aenean orci dolor, vestibulum sed sapien a, blandit tincidunt augue. Sed quis dui quam. Etiam sodales odio at felis lobortis, in pellentesque arcu consectetur. Proin id odio molestie, vehicula neque blandit, fermentum dui. Praesent eget bibendum lacus, eget condimentum tellus. Donec libero odio, varius et condimentum vitae, dictum at dolor. Nulla facilisi. Sed tincidunt ligula ut quam porttitor, nec facilisis mauris imperdiet. Vivamus venenatis tempus pellentesque. Maecenas maximus congue hendrerit. Etiam neque magna, fringilla a tempus cursus, tincidunt nec diam. In luctus elit eget turpis ullamcorper auctor. Fusce blandit vestibulum malesuada.

                            Vestibulum in eros id massa hendrerit pellentesque. Nulla at magna sit amet leo finibus vulputate. Sed eget ultricies sem. Nullam sollicitudin consectetur ligula, in interdum quam cursus interdum. Aliquam faucibus a nibh eget posuere. Donec faucibus, ipsum id varius laoreet, mi mauris auctor lorem, in pharetra odio felis a felis. Curabitur efficitur quam quis placerat vulputate. Vivamus porta tempus turpis, in viverra ante hendrerit a. Vestibulum tellus nunc, interdum ut congue vel, pellentesque eu urna. Sed malesuada venenatis orci id vulputate.

                        </Text>
                        <Text>
                            <h1>Hi This Gaurav Sinha</h1>
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text>World1</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>World2</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>World3</Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
}
export default BasicDocument;