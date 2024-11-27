import React from 'react'
import Container from '../../components/Container'
import DashboardHeader from '../../components/DashboardHeader'
import DashboardTabs from '../../components/DashboardTabs'
import MovieGrid from '../../components/MovieGrid'

const Dashboard = () => {
    return (
        <Container>
            <DashboardHeader />
            <DashboardTabs />
            <MovieGrid />
        </Container>
    )
}

export default Dashboard
