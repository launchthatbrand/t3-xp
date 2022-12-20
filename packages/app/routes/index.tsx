import Text from "../components/design/Text";
import View from "../components/design/View";
import Three from "../components/SpinningCube";
import MainLayout from "../components/layouts/MainLayout";

export default function HomeScreen() {
  return (
    <MainLayout>
      <Text
        sx={{
          fontSize: 42,
          fontWeight: "bold",
          textAlign: "center",
          paddingTop: 3,
          paddingBottom: 1,
        }}
      >
        Create{" "}
        <Text
          sx={(theme) => ({
            color: theme.colors.$primary,
          })}
        >
          XP
        </Text>{" "}
        App
      </Text>
      <View
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          maxHeight: "100%",
        }}
      >
        <Three />
      </View>
    </MainLayout>
  );
}
