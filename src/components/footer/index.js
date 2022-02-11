import React from 'react'
import {Container, Wrapper, Row, Column, Link, Link2, Title, Title2} from './styles/footer'

export default function Footer({ children, ...restProops})
{
    return<Container {...restProops}>{children}</Container>
}

Footer.Wrapper = function FooterWrapper({children, ...restProops})
{
    return <Wrapper {...restProops}>{children}</Wrapper>
}

Footer.Row = function FooterRow({children, ...restProops})
{
    return <Row {...restProops}>{children}</Row>
}

Footer.Column = function FooterColumn({children, ...restProops})
{
    return <Column {...restProops}>{children}</Column>
}

Footer.Link = function FooterLink({children, ...restProops})
{
    return <Link {...restProops}>{children}</Link>
}

Footer.Link2 = function FooterLink2({children, ...restProops})
{
    return <Link2 {...restProops}>{children}</Link2>
}

Footer.Title = function FooterTitle({children, ...restProops})
{
    return <Title {...restProops}>{children}</Title>
}

Footer.Title2 = function FooterTitle2({children, ...restProops})
{
    return <Title2 {...restProops}>{children}</Title2>
}
