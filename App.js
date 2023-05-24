const App = () => {
  return (
    <Layout>
      <HeroSection />
      <Container>
        {[...new Array(3)].map((_, index) => (
          <Card key={index} id={index + 1} />
        ))}
      </Container>
    </Layout>
  );
};
