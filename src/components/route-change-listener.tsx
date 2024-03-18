import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingTransition from "@/components/loading/loading-transition";

const RouteChangeListener = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleRouteChangeStart = () => {
      timeoutId = setTimeout(() => setLoading(true), 500);
    };
    const handleRouteChangeComplete = () => {
      clearTimeout(timeoutId);
      setLoading(false);
    };

    // Écouter les événements de début et de fin de changement de route
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeComplete); // Gérer également les erreurs

    // Nettoyer les écouteurs d'événements lors du démontage du composant
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeComplete);
    };
  }, [router.events]);

  return loading ? <LoadingTransition /> : null;
};

export default RouteChangeListener;
