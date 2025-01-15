// components/withAuth.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const router = useRouter();

    useEffect(() => {
      axios
        .get('http://moneymaker.com.pk/public', { withCredentials: true })
        .then((response) => {
          if (!response.data) {
            router.push('/login');
          }
        })
        .catch(() => {
          router.push('/login');
        });
    }, []);

    return <Component {...props} />;
  };
}
