import React, {useEffect} from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { authenticate } from '../../store/auth/actions';

const LoginContainer = () => {
  const { auth } = useSelector((store) => ({
    auth: store.authStore,
  }), shallowEqual);

  console.log(auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authenticate({}));
  }, [dispatch]);

  return (
    <div>
      Login
    </div>
  );
}

export default LoginContainer;
