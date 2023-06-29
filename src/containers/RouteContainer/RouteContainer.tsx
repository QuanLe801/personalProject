import React from 'react';
import styles from './Route.module.scss';
import Route from '@/components/RouteComponent/Route';
import { RouteList } from '@/utils/const';
import ContainerWrapper from '@/components/ContainerWrapper';

function RouteContainer() {
  return (
    <ContainerWrapper>
      <div className={styles.route_wrapper}>
        <div style={{ marginRight: '20px', height: 'inherit', width: '100%' }}>
          <Route
            title={RouteList[0].title}
            description={RouteList[0].description}
            listRoute={RouteList[0].listRoute}
            bgColor={RouteList[0].bgColor}
            big={RouteList[0].big}
          />
        </div>
        <div style={{ marginRight: '20px', height: 'inherit', width: '100%' }}>
          <Route
            title={RouteList[1].title}
            description={RouteList[1].description}
            listRoute={RouteList[1].listRoute}
            bgColor={RouteList[1].bgColor}
            big={RouteList[1].big}
            marginBottom
          />
          <Route
            title={RouteList[2].title}
            description={RouteList[2].description}
            listRoute={RouteList[2].listRoute}
            bgColor={RouteList[2].bgColor}
            big={RouteList[2].big}
          />
        </div>
        <div style={{ height: 'inherit', width: '100%' }}>
          <Route
            title={RouteList[3].title}
            description={RouteList[3].description}
            listRoute={RouteList[3].listRoute}
            bgColor={RouteList[3].bgColor}
            big={RouteList[3].big}
            marginBottom
          />
          <Route
            title={RouteList[4].title}
            description={RouteList[4].description}
            listRoute={RouteList[4].listRoute}
            bgColor={RouteList[4].bgColor}
            big={RouteList[4].big}
          />
        </div>
      </div>
    </ContainerWrapper>
  );
}

export default RouteContainer;
